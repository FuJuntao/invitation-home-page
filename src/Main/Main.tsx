import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Center, Heading } from '@chakra-ui/layout';
import React from 'react';
import InvitationFormModal from '../InvitationFormModal';
import { slogan } from '../shared/texts';

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center as="main" flex="1" flexDirection="column" p="4" textAlign="center">
      <Heading as="h1" size="2xl">
        {slogan}
      </Heading>
      <Heading as="h2" size="md" mt="12" color="teal.400">
        Be the first to know when we launch.
      </Heading>
      <Button mt="6" colorScheme="teal" onClick={onOpen}>
        Request an invite
      </Button>

      <InvitationFormModal isCentered isOpen={isOpen} onClose={onClose} />
    </Center>
  );
}

export default Main;
