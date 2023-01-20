import { IconButton } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';

export const UpdateContactButton = ({ onUpdateContact }) => {
  return (
    <IconButton
      icon={<FiEdit />}
      colorScheme="green"
      variant="solid"
      width="60px"
      size="md"
      onClick={onUpdateContact}
    />
  );
};
