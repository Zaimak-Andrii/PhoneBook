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
  Stack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from 'components/Auth/FormInput';
import { useAppToast } from 'hooks/useAppToast';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  useAddContactMutation,
  useUpdateContactMutation,
} from 'services/contactsAPI';
import { contactSchema } from '../contact.validation';

export default function UpsertContact({
  isOpen,
  onClose,
  initialValues = null,
}) {
  const fetchAbort = useRef(null);
  const toast = useAppToast();
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(contactSchema),
  });

  const closeHandler = () => {
    fetchAbort.current?.abort();
    fetchAbort.current = null;
    reset();
    onClose();
  };

  const updateContactHandler = async data => {
    fetchAbort.current = updateContact(data);

    try {
      await fetchAbort.current.unwrap();
      toast({
        status: 'success',
        description: `Contact updated success!`,
      });

      closeHandler();
    } catch (error) {
      if (error.status === 400) {
        toast({
          title: 'Update failed!',
          status: 'error',
          description: "Can't update contact.",
        });
      } else if (error.name === 'AbortError') {
        toast({
          status: 'warning',
          description: 'Update has been aboted.',
        });
      }
    }
  };

  const addContactHandler = async data => {
    fetchAbort.current = addContact(data);

    try {
      const user = await fetchAbort.current.unwrap();
      toast({
        title: 'Contact added!',
        status: 'success',
        description: `${user?.name} contact has been added.`,
      });

      closeHandler();
    } catch (error) {
      if (error.status === 400) {
        toast({
          status: 'error',
          description: "Can't add contact.",
        });
      } else if (error.name === 'AbortError') {
        toast({
          status: 'warning',
          description: 'Adding contact is aboted.',
        });
      }
    }
  };

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={closeHandler}>
      <DrawerOverlay />
      <Box
        as="form"
        autoComplete="off"
        onSubmit={handleSubmit(
          initialValues ? updateContactHandler : addContactHandler
        )}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new contact
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <FormInput
                label="Name"
                id={`add-contact-name`}
                placeholder="Please enter contact name"
                type="text"
                {...register('name')}
                error={errors?.name}
                isTouched={touchedFields?.name}
              />

              <FormInput
                label="Phone number"
                id={`add-contact-number`}
                placeholder="Please enter a phone number"
                type="text"
                {...register('number')}
                error={errors?.number}
                isTouched={touchedFields?.number}
              />
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={closeHandler}>
              Cancel
            </Button>
            <Button colorScheme="blue" isLoading={isSubmitting} type="submit">
              {initialValues ? 'Update' : 'Add'}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Box>
    </Drawer>
  );
}
