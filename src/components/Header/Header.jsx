import { Flex } from '@chakra-ui/react';
import AppBar from 'components/AppBar';
import NavBar from 'components/NavBar';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Header() {
  return (
    <AppBar>
      <Flex alignItems="center">
        <NavBar />
        <UserMenu />
      </Flex>
    </AppBar>
  );
}
