import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
// import SignUp from '~/pages/SignUp';
import Dashboard from '../pages/Dashboard';
// import Clients from '../pages/Clients';
// import Settings from '../pages/Settings';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} />
      {/*  <Route path="/register" component={SignUp} />
      <Route path="/clients" component={Clients} />
      <Route path="/settings" component={Settings} /> */}
    </Switch>
  );
};

export default Routes;
