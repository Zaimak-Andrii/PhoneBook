import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import { DeleteContactButton, UpdateContactButton } from 'components/Buttons';

export default function ContactsCard({ contact, onUpdateContact }) {
  const { name, number, id } = contact;

  return (
    <Card>
      <CardBody as={Flex} flexDirection="column" alignItems="center" gap={2}>
        <Avatar name={name} size="xl" />
        <Heading as="p" size="sm">
          {name}
        </Heading>
        <Text>{number}</Text>
      </CardBody>

      <CardFooter justifyContent="center" pt={0}>
        <HStack>
          <UpdateContactButton onUpdateContact={onUpdateContact} />
          <DeleteContactButton id={id} />
        </HStack>
      </CardFooter>
    </Card>
  );
}
