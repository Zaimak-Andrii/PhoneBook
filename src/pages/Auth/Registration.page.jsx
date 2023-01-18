import { Divider, Heading, VStack } from '@chakra-ui/react';
import { ButtonLink } from 'components/Buttons';
import { RegistrationForm } from '../../components/Auth/RegistrationForm/RegistrationForm';

export default function RegistrationPage() {
  return (
    <>
      <VStack w="sm" mx="auto">
        <Heading as="h2" size="lg">
          Registration
        </Heading>
        <RegistrationForm />
        <Divider py="2" />

        <ButtonLink to="/login" variant="link" color="teal">
          I'm already member
        </ButtonLink>
      </VStack>
    </>
  );
}
