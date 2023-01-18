import { Box, Stack } from '@chakra-ui/react';
import { NavButton } from 'components/Buttons';
import { routes } from 'constants/routes';

export default function NavBar() {
  return (
    <Box as="nav">
      <Stack direction="row" as="ul" spacing={[2, null, 4]}>
        <Box as="li">
          <NavButton to={routes.HOME}>Home</NavButton>
        </Box>
        <Box as="li">
          <NavButton to={routes.CONTACTS}>Contacts</NavButton>
        </Box>
      </Stack>
    </Box>
  );
}
