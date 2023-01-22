import { Center, Heading, VStack } from '@chakra-ui/react';
import { FcContacts } from 'react-icons/fc';

export default function HomePage() {
  return (
    <Center>
      <VStack justifyContent="center">
        <FcContacts size="100px" />
        <Heading as="h1">PhoneBook</Heading>
        <Heading as="h2" size="md">
          Home page
        </Heading>
      </VStack>
    </Center>
  );
}
