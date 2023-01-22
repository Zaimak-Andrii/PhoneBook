import { Flex, Heading, Text } from '@chakra-ui/react';
import { ButtonLink } from 'components/Buttons';
import { routes } from 'constants/routes';

export default function NotFoundPage() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      height="100vh"
      justifyContent="center"
      gap={6}
    >
      <Heading size="4xl">404</Heading>
      <Text>The page you're looking for can't be found.</Text>
      <ButtonLink
        to={routes.HOME}
        replace
        variant="solid"
        colorScheme="facebook"
      >
        Home
      </ButtonLink>
    </Flex>
  );
}
