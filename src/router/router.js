import { App } from 'components/App';
import { HomePage, PrivatePage, RegistrationPage, RestrictedPage } from 'pages';
import { lazy } from 'react';

const { createBrowserRouter } = require('react-router-dom');

const ContactsPage = lazy(() => import('pages/Contacts'));
const LoginPage = lazy(() => import('pages/Auth/Login.page'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: '/contacts',
          element: (
            <PrivatePage redirectTo="/login" component={<ContactsPage />} />
          ),
        },
        {
          path: '/login',
          element: <RestrictedPage redirectTo="/" component={<LoginPage />} />,
        },
        { path: '/register', element: <RegistrationPage /> },
      ],
    },
  ],
  {
    basename: '/goit-react-hw-08-phonebook',
  }
);

export default router;
