import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { ApplicationState } from 'store';

import AuthLayout from '../pages/_layouts/auth';
// import DefaultLayout from '../pages/_layouts/default';

interface Props extends RouteProps {
  isPrivate?: boolean;
}

const RouterWrapper: React.FC<Props> = (
  component,
  isPrivate = false,
  ...rest
) => {
  // const signed = useSelector((state: ApplicationState) => state.auth.signed);

  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // const Layout = signed ? DefaultLayout : AuthLayout;
  const Layout = AuthLayout;

  const Component: any = component;
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouterWrapper;
