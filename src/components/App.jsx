import { createStandaloneToast } from '@chakra-ui/react';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLazyRefreshQuery } from 'services/auth';
import Header from './Header';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectToken } from 'redux/auth/auth.selectors';

const { ToastContainer } = createStandaloneToast();

export const App = () => {
  const token = useSelector(selectToken);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [callRefreshToken] = useLazyRefreshQuery();

  useEffect(() => {
    if (token && !isAuthenticated) callRefreshToken();
  }, [callRefreshToken, token, isAuthenticated]);

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
};
