/* eslint-disable import/no-unresolved */
import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
// import SignUp from '~/pages/SignUp';
// import Dashboard from '../pages/Dashboard';
// import Services from '../pages/Services';
// import Solicitations from '../pages/Solicitations';
// import Clients from '../pages/Clients';
// import Settings from '../pages/Settings';
// import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/* <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/solicitations" component={Solicitations} />
      <Route path="/clients" component={Clients} />
      <Route path="/services" component={Services} />
      <Route path="/settings" component={Settings} />
      <Route path="/profile" component={Profile} isPrivate /> */}
    </Switch>
  );
}
