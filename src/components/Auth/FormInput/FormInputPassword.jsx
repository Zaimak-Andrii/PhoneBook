import { forwardRef, useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const FormInputPassword = forwardRef(
  ({ id, label, error, isTouched, ...otherProps }, ref) => {
    const [show, setShow] = useState(false);
    const clickHandler = () => setShow(prev => !prev);

    return (
      <FormControl isInvalid={isTouched && error}>
        <FormLabel htmlFor={id}>{label}</FormLabel>

        <InputGroup size="md">
          <Input
            id={id}
            {...otherProps}
            type={show ? 'text' : 'password'}
            ref={ref}
          />
          <InputRightElement>
            <IconButton
              variant="ghost"
              colorScheme="facebook"
              aria-label="Show password"
              icon={!show ? <FiEye /> : <FiEyeOff />}
              size="sm"
              onClick={clickHandler}
            />
          </InputRightElement>
        </InputGroup>

        <FormErrorMessage>{error && error.message}</FormErrorMessage>
      </FormControl>
    );
  }
);

export default FormInputPassword;
