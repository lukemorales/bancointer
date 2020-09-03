import React from 'react';

import { Route, Redirect, RouteProps } from 'react-router-dom';

import useAuth from '~/contexts/auth';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { signed } = useAuth();

  if (!signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={() => <Component />} />;
};

export default PrivateRoute;
