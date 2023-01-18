import { Box, Container, createStandaloneToast } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const { ToastContainer } = createStandaloneToast();

export const Layout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={null}>
        <Box as="main" py={6}>
          <Container>
            <Outlet />
          </Container>
        </Box>
      </Suspense>

      <ToastContainer />
    </>
  );
};
