import { IconButton } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { useContactsContext } from '../Contacts/Contact.context';

export const UpdateContactButton = ({ contact }) => {
  const { onUpdateContact } = useContactsContext();
  return (
    <IconButton
      icon={<FiEdit />}
      colorScheme="green"
      variant="solid"
      width="60px"
      size="md"
      onClick={() => onUpdateContact(contact)}
    />
  );
};
