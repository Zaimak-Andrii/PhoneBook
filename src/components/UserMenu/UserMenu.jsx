import { Avatar, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { ButtonLink } from '../Buttons/ButtonLink';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'redux/auth/auth.selectors';
import { useLogoutMutation } from 'services/auth';

export default function UserMenu() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [callLogout] = useLogoutMutation();

  return (
    <>
      {isAuthenticated ? (
        <Stack direction="row" alignItems="center" ml="auto">
          <Avatar name="Andrii Zaimak" size="sm" />
          <Text color="facebook.50">dev.andrii.zaimak@gmail.com</Text>
          <IconButton
            colorScheme="facebook"
            aria-label="Logout"
            size="sm"
            icon={<FiLogOut />}
            onClick={callLogout}
          />
        </Stack>
      ) : (
        <Flex gap={4} ml="auto">
          <ButtonLink to="/login" colorScheme="green">
            Sign In
          </ButtonLink>
          <ButtonLink to="/register" colorScheme="orange" color="white">
            Sign Up
          </ButtonLink>
        </Flex>
      )}
    </>
  );
}
