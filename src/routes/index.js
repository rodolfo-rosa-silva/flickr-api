import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Home from '../pages/home';

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Home} />
      <Route path="/tags" component={Home} />
      <Route component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
