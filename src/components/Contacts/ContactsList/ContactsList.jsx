import { SimpleGrid, Spinner } from '@chakra-ui/react';
import { useGetContactsQuery } from 'services/contactsAPI';
import ContactCard from '../ContactCard';

export default function ContactsList({ filter }) {
  const { data: contacts, isFetching } = useGetContactsQuery(undefined, {
    selectFromResult: result => ({
      ...result,
      data:
        result.data?.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        ) ?? [],
    }),
  });

  return (
    <>
      {isFetching && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          mx="auto"
          display="block"
          mb={4}
        />
      )}
      <SimpleGrid columns={[1, null, 4, 5, 6]} spacing={4}>
        {contacts?.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </SimpleGrid>
    </>
  );
}
