/** @jsx jsx */
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
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
      <ModalHeader textAlign="center">Request an invite</ModalHeader>
      <ModalCloseButton />

      <ModalBody>
        <FormControl>
          <FormLabel htmlFor="fullName">Full name</FormLabel>
          <Input id="fullName" placeholder="Full name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" placeholder="Email" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="confirmEmail">Confirm Email</FormLabel>
          <Input id="confirmEmail" type="email" placeholder="Confirm Email" />
        </FormControl>
      </ModalBody>

      <ModalFooter justifyContent="center">
        <Button>Send</Button>
      </ModalFooter>
    </ModalContent>
  );
}

export default InvitationForm;
