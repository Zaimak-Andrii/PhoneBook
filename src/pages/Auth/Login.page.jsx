import { Divider, VStack, Text, Heading } from '@chakra-ui/react';
import LoginForm from 'components/Auth/LoginForm';
import { ButtonLink } from 'components/Buttons';

export default function LoginPage() {
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
          <ButtonLink to="/register" variant="link" color="teal">
            Sign up
          </ButtonLink>
        </Text>
      </VStack>
    </>
  );
}
