import { routes } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/auth/auth.selectors';

export default function RestrictedPage({
  component: Component,
  redirectTo = routes.HOME,
}) {
  const location = useLocation();
  const to = location.state?.from || redirectTo;
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? (
    <Navigate to={to} state={{ from: location }} replace />
  ) : (
    Component
  );
}
