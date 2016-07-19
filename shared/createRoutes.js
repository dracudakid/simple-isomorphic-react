import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App.react'
import Home from './components/Home.react'
import Todos from './components/Todos.react'
import NotFound from './components/NotFound.react'

export default function createRoutes(getState){
  // do some logic if needs...
  // const requireAuth = (nextState, replace) => {
  //   // Note how we can read anything from the global app state safely, because
  //   // the app state is an immutable value.
  //   const loggedInUser = getState().users.viewer;
  //   if (!loggedInUser) {
  //     replace({
  //       pathname: '/login',
  //       state: { nextPathname: nextState.location.pathname }
  //     });
  //   }
  // };

  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route path="todos" component={Todos} />
      <Route path="*" component={NotFound} />
    </Route>
  );
}
