import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../const';

type Props = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export default function PrivateRoute(props: Props): JSX.Element {
  const { authStatus, children } = props;

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to='/login' />
  );
}
