import { Box, Stack } from '@chakra-ui/react';
import { NavButton } from 'components/Buttons';

export default function NavBar() {
  return (
    <Box as="nav">
      <Stack direction="row" as="ul" spacing={[2, null, 4]}>
        <Box as="li">
          <NavButton to="/">Home</NavButton>
        </Box>
        <Box as="li">
          <NavButton to="/contacts">Contacts</NavButton>
        </Box>
      </Stack>
    </Box>
  );
}
