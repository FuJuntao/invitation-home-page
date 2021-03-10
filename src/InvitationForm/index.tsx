/** @jsx jsx */
import { Button } from '@chakra-ui/button';
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/modal';
import { jsx } from '@emotion/react';

function InvitationForm() {
  return (
    <ModalContent>
      <ModalHeader>Request an invite</ModalHeader>
      <ModalCloseButton />
      <ModalBody>form</ModalBody>

      <ModalFooter>
        <Button>Send</Button>
      </ModalFooter>
    </ModalContent>
  );
}

export default InvitationForm;
