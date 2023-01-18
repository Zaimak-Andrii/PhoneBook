import {
  Input,
  InputGroup,
  Button,
  InputLeftAddon,
  useDisclosure,
} from '@chakra-ui/react';
import { ContactsList } from 'components/Contacts';
import AddContact from 'components/Contacts/AddContact';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function ContactsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = useState('');
  const inputSearchHandler = evt => setFilter(evt.target.value);

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

      <ContactsList filter={filter} />

      <AddContact isOpen={isOpen} onClose={onClose} />
    </>
  );
}
