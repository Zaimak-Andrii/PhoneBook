import { createStandaloneToast } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  useLoginMutation,
  useLogoutMutation,
  useRefreshQuery,
} from 'services/auth';
import Header from './Header';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth.selectors';

const { ToastContainer } = createStandaloneToast();

export const App = () => {
  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();
  const token = useSelector(selectToken);
  useRefreshQuery(null, {
    skip: !token,
  });

  return (
    <>
      <Header />
      <button
        onClick={() =>
          login({
            email: 'andriizaimak8@gmail.com',
            password: 'examplepwd12345',
          })
        }
      >
        login
      </button>
      <button onClick={() => logout()}>Logout</button>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
};
