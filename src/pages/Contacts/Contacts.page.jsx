import {
  Input,
  InputGroup,
  Button,
  InputLeftAddon,
  useDisclosure,
} from '@chakra-ui/react';
import { ContactsList } from 'components/Contacts';
import UpsertContact from 'components/Contacts/UpsertContact';

import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function ContactsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateContact, setUpdateContact] = useState(null);
  const [filter, setFilter] = useState('');
  const inputSearchHandler = evt => setFilter(evt.target.value);

  const updateContactHandler = initialValues => {
    setUpdateContact(initialValues);
    onOpen();
  };
  const closeContactHandler = () => {
    setUpdateContact('');
    onClose();
  };

  return (
    <>
      <InputGroup mb={4}>
        <InputLeftAddon px={2} cursor="pointer" userSelect="none">
          Search
        </InputLeftAddon>
        <Input
          name="search"
          value={filter}
          onChange={inputSearchHandler}
          placeholder="search..."
        />
      </InputGroup>

      <Button
        leftIcon={<FiPlus />}
        colorScheme="facebook"
        onClick={onOpen}
        mb={4}
      >
        Create user
      </Button>

      <ContactsList filter={filter} onUpdateContact={updateContactHandler} />

      {isOpen && (
        <UpsertContact
          isOpen={isOpen}
          onClose={closeContactHandler}
          initialValues={updateContact}
        />
      )}
    </>
  );
}
