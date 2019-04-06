import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import EOD from '../components/eod';
import Forgot from '../components/auth/Forgot';
import Reset from '../components/auth/Reset';
import Card from '../components/auth/Card/Card';
import RedirectRoot from './RedirectRoot';

const Routes = () => (
  <div>
    <Switch>
      <PrivateRoute exact path="/" component={EOD} />
      <AuthRoute exact path="/login" component={Card} />
      <AuthRoute exact path="/forgot" component={Forgot} />
      <AuthRoute path="/reset/:token" component={Reset} />
      <Route component={RedirectRoot} />
    </Switch>
  </div>
);

export default Routes;
