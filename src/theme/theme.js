import { extendTheme } from '@chakra-ui/react';

const AppBar = {
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === 'dark' ? 'facebook.800' : 'facebook.400',
    color: colorMode === 'dark' ? 'gray.800' : 'white',
    py: 2,
    boxShadow: 'lg',
  }),
};

const Container = {
  baseStyle: {
    maxW: ['100%', null, '768px', '1024px', '1200px'],
  },
};

export const theme = extendTheme({
  components: {
    AppBar,
    Container,
  },
});
