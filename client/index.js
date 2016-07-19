import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';

import store from '../shared/store';
import createRoutes from '../shared/createRoutes';

const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store.getState);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)