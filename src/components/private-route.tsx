import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  console.log('check Auth status');
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
};
