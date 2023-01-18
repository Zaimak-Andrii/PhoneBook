import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useAddContactMutation } from 'services/contactsAPI';

export default function AddContact({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const firstField = useRef();
  const [addContact, { isLoading }] = useAddContactMutation();

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      initialFocusRef={firstField}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          Create a new contact
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="username">Name</FormLabel>
              <Input
                ref={firstField}
                id="username"
                value={name}
                onChange={evt => setName(evt.target.value)}
                placeholder="Please enter contact name"
              />
            </Box>
            <Box>
              <FormLabel htmlFor="number">Phone number</FormLabel>
              <Input
                id="number"
                value={number}
                onChange={evt => setNumber(evt.target.value)}
                placeholder="Please enter a phone number"
              />
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            isLoading={isLoading}
            onClick={async () => {
              await addContact({
                name: name,
                number: number,
              });
              onClose();
              setName('');
              setNumber('');
            }}
          >
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
