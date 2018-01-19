import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users.js';

import Error from './routes/Error.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/error" component={Error} />
    </Router>
  );
}

export default RouterConfig;
