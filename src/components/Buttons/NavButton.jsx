import { ButtonLink } from './ButtonLink';

export const NavButton = ({ children, ...otherProps }) => (
  <ButtonLink
    colorScheme="facebook"
    sx={{
      '&.active': {
        bg: 'facebook.800',
      },
    }}
    {...otherProps}
  >
    {children}
  </ButtonLink>
);
