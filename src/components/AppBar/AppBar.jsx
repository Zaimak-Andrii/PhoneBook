import {
  forwardRef,
  useStyleConfig,
  chakra,
  Container,
} from '@chakra-ui/react';

const AppBar = forwardRef((props, ref) => {
  const { children, otherProps } = props;
  const styles = useStyleConfig('AppBar');

  return (
    <chakra.header ref={ref} __css={styles} {...otherProps}>
      <Container>{children}</Container>
    </chakra.header>
  );
});

export default AppBar;
