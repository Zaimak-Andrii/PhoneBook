import { IconButton } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { useLogoutMutation } from 'services/authAPI';

export const LogoutButton = () => {
  const [callLogout, { isLoading }] = useLogoutMutation();

  return (
    <IconButton
      colorScheme="facebook"
      aria-label="Logout"
      size="sm"
      isLoading={isLoading}
      icon={<FiLogOut />}
      onClick={callLogout}
    />
  );
};
