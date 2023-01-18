import { routes } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsRefreshing, selectToken } from 'redux/auth/auth.selectors';

export default function PrivatePage({
  component: Component,
  redirectTo = routes.LOGIN,
}) {
  const location = useLocation();
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isRefreshing && !token;

  return shouldRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  ) : (
    Component
  );
}
