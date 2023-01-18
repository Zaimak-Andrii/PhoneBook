import { Divider, Heading, Text, VStack } from '@chakra-ui/react';
import { ButtonLink } from 'components/Buttons';
import { routes } from 'constants/routes';
import { RegistrationForm } from '../../components/Auth/RegistrationForm/RegistrationForm';
import { useLocation } from 'react-router-dom';

export default function RegistrationPage() {
  const location = useLocation();
  return (
    <>
      <VStack w="sm" mx="auto">
        <Heading as="h2" size="lg">
          Registration
        </Heading>
        <RegistrationForm />
        <Divider py="2" />

        <Text>
          Already a member?&nbsp;{' '}
          <ButtonLink
            to={routes.LOGIN}
            variant="link"
            color="teal"
            state={location.state}
          >
            Sign in
          </ButtonLink>
        </Text>
      </VStack>
    </>
  );
}
