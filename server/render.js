import React from 'react'
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import store from '../shared/store.js'
import createRoutes from '../shared/createRoutes';
import Html from './Html.react';


function renderPage(store, renderProps, req){
  const state = store.getState();
  const { header, hostname } = req;

  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps}/>
    </Provider>
  )

  const scriptHtml = `<script src="bundle.js"></script>`

  const docHtml = ReactDOMServer.renderToStaticMarkup(
    <Html 
      bodyHtml={`<div id="app">${appHtml}</div>${scriptHtml}`}
    />
  )

  return `<!DOCTYPE html>${docHtml}`;
}

export default function render(req, res, next){
  const memoryHistory = createMemoryHistory(req.originalUrl);
  
  const history = syncHistoryWithStore(memoryHistory, store);
  const routes = createRoutes(store.getState);
  const location = req.url;

  // https://github.com/reactjs/react-router/blob/master/docs/API.md#match-routes-location-history-options--cb
  match( { history, routes, location }, async (error, redirectLocation, renderProps) => {

    if(redirectLocation){
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      return;
    }

    if(error){
      next(error);
      return;
    }

    try {
      const html = renderPage(store, renderProps, req);
      const status = renderProps.routes.some(route => route.path === "*") ? 404 : 200;
      res.status(status).send(html);
    } catch(e){
      next(e);
    }
  })

}