import { Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const ButtonLink = ({ children, ...otherProps }) => (
  <Button as={NavLink} {...otherProps}>
    {children}
  </Button>
);
