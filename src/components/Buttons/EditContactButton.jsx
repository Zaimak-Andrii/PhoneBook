import { IconButton } from '@chakra-ui/react';
import { useUpdateContactMutation } from 'services/contactsAPI';
import { FiEdit } from 'react-icons/fi';

export const UpdateContactButton = ({ contact }) => {
  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const clickHandler = () => updateContact(contact);

  return (
    <IconButton
      icon={<FiEdit />}
      colorScheme="green"
      variant="solid"
      isLoading={isLoading}
      width="60px"
      size="md"
      onClick={clickHandler}
    />
  );
};
