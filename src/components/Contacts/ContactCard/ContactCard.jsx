import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import { DeleteContactButton, UpdateContactButton } from 'components/Buttons';

export default function ContactsCard({ contact, onUpdateContact }) {
  const { name, number, id } = contact;

  return (
    <Card>
      <CardBody textAlign="center">
        <Avatar name={name} size="xl" />
        <Heading as="p" size="sm">
          {name}
        </Heading>
        <Text>{number}</Text>
      </CardBody>

      <CardFooter justifyContent="center">
        <HStack>
          <UpdateContactButton onUpdateContact={onUpdateContact} />
          <DeleteContactButton id={id} />
        </HStack>
      </CardFooter>
    </Card>
  );
}
