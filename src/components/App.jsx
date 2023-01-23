import { lazy, useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLazyRefreshQuery } from 'services/authAPI';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectToken } from 'redux/auth/auth.selectors';
import { Layout } from './Layout';
import { PrivatePage, RestrictedPage } from 'pages';
import { routes } from 'constants/routes';
// import NotFoundPage from 'pages/NotFound.page';

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const LoginPage = lazy(() => import('pages/Auth/Login.page'));
const RegistrationPage = lazy(() => import('pages/Auth/Registration.page'));
const NotFoundPage = lazy(() => import('pages/NotFound.page'));

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
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path={routes.CONTACTS}
            element={
              <PrivatePage
                redirectTo={routes.LOGIN}
                component={<ContactsPage />}
              />
            }
          />
          <Route
            path={routes.LOGIN}
            element={
              <RestrictedPage
                redirectTo={routes.HOME}
                component={<LoginPage />}
              />
            }
          />
          <Route
            path={routes.REGISTER}
            element={
              <RestrictedPage
                redirectTo={routes.HOME}
                component={<RegistrationPage />}
              />
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallbac={null}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
