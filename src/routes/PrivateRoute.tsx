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
  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={() => <Component />} />;
};

export default PrivateRoute;
