import { IconButton } from '@chakra-ui/react';
import { useDeleteContactMutation } from 'services/contactsAPI';
import { MdDeleteForever } from 'react-icons/md';

export const DeleteContactButton = ({ id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const clickHandler = () => deleteContact(id);

  return (
    <IconButton
      icon={<MdDeleteForever />}
      colorScheme="red"
      variant="solid"
      isLoading={isLoading}
      width="60px"
      size="md"
      onClick={clickHandler}
    />
  );
};
