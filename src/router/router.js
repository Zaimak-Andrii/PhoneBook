import { App } from 'components/App';
import { ContactsPage, HomePage, LoginPage, RegistrationPage } from 'pages';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/contacts', element: <ContactsPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/register', element: <RegistrationPage /> },
      ],
    },
  ],
  {
    basename: '/goit-react-hw-08-phonebook',
  }
);

export default router;
