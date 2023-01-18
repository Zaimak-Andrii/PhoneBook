import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { forwardRef } from 'react';

const FormInput = forwardRef(
  ({ id, label, error, isTouched, ...otherProps }, ref) => (
    <FormControl isInvalid={isTouched && error}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input id={id} {...otherProps} ref={ref} />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  )
);

export default FormInput;
