import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { DeleteContactButton, UpdateContactButton } from 'components/Buttons';
import { useGetContactsQuery } from 'services/contactsAPI';

export default function ContactsList({ filter }) {
  const { data: contacts, isFetching } = useGetContactsQuery(undefined, {
    // refetchOnMountOrArgChange: true,
    selectFromResult: result => ({
      ...result,
      data:
        result.data?.filter(contact =>
          contact.name.toLowerCase().includes(filter)
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
        {contacts?.map(({ id, name, number }) => (
          <Card key={id}>
            <CardBody textAlign="center">
              <Avatar name={name} size="xl" />
              <Heading as="p" size="sm">
                {name}
              </Heading>
              <Text>{number}</Text>
            </CardBody>

            <CardFooter justifyContent="center">
              <HStack>
                <UpdateContactButton contact={{ id, name, number }} />
                <DeleteContactButton id={id} />
              </HStack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
