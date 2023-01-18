import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/auth/auth.selectors';

export default function RestrictedPage({
  component: Component,
  redirectTo = '/',
}) {
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  ) : (
    Component
  );
}
