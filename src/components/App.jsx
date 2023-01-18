import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLazyRefreshQuery } from 'services/auth';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectToken } from 'redux/auth/auth.selectors';
import { Layout } from './Layout';
import { PrivatePage, RestrictedPage } from 'pages';

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const LoginPage = lazy(() => import('pages/Auth/Login.page'));
const RegistrationPage = lazy(() => import('pages/Auth/Registration.page'));

export const App = () => {
  const token = useSelector(selectToken);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [callRefreshToken] = useLazyRefreshQuery();

  useEffect(() => {
    if (token && !isAuthenticated) callRefreshToken();
  }, [callRefreshToken, token, isAuthenticated]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivatePage redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedPage
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedPage
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
