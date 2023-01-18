import { Avatar, Stack, Text } from '@chakra-ui/react';
import { ButtonLink } from '../Buttons/ButtonLink';
import { useSelector } from 'react-redux';
import {
  selectIsAuthenticated,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/auth.selectors';
import { useLocation } from 'react-router-dom';
import { LogoutButton } from 'components/Buttons';

export default function UserMenu() {
  const location = useLocation();
  const isShowLogin =
    location.pathname !== '/login' && location.pathname !== '/register';
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  if (isRefreshing) return;

  if (isAuthenticated) {
    return (
      <Stack direction="row" alignItems="center" ml="auto">
        <Avatar name={user?.name} size="sm" />
        <Text color="facebook.50">{user?.email}</Text>
        <LogoutButton />
      </Stack>
    );
  }

  return (
    <>
      {isShowLogin && (
        <ButtonLink to="/login" colorScheme="green" ml="auto">
          Sign In
        </ButtonLink>
      )}
    </>
  );
}
