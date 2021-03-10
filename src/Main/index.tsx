/** @jsx jsx */
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Center, Heading } from '@chakra-ui/layout';
import { Modal, ModalOverlay } from '@chakra-ui/modal';
import { jsx } from '@emotion/react';
import InvitationForm from '../InvitationForm';
import { slogan } from '../shared/texts';

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center as="main" flex="1" flexDirection="column">
      <Heading as="h1" textAlign="center">
        {slogan}
      </Heading>
      <Heading as="h2" size="md" textAlign="center">
        Be the first to know when we launch.
      </Heading>
      <Button onClick={onOpen}>Request an invite</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <InvitationForm />
      </Modal>
    </Center>
  );
}

export default Main;
