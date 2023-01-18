import { Divider, VStack, Text, Heading } from '@chakra-ui/react';
import LoginForm from 'components/Auth/LoginForm';
import { ButtonLink } from 'components/Buttons';
import { routes } from 'constants/routes';
import { useLocation } from 'react-router-dom';

export default function LoginPage() {
  const location = useLocation();
  return (
    <>
      <VStack w="sm" mx="auto">
        <Heading as="h2" size="lg">
          Login
        </Heading>
        <LoginForm />
        <Divider py="2" />
        <Text>
          Don't have an account?&nbsp;{' '}
          <ButtonLink
            to={routes.REGISTER}
            variant="link"
            color="teal"
            state={location.state}
          >
            Sign up
          </ButtonLink>
        </Text>
      </VStack>
    </>
  );
}
