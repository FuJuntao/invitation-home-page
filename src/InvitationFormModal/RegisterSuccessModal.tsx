import { Button } from '@chakra-ui/button';
import { Heading } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/modal';
import React from 'react';
import { companyName } from '../shared/texts';

type RegisterSuccessModalProps = Omit<ModalProps, 'children'>;

export default function RegisterSuccessModal(props: RegisterSuccessModalProps) {
  const { onClose, ...otherProps } = props;

  return (
    <Modal isCentered onClose={onClose} {...otherProps}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>All Done</ModalHeader>
        <ModalBody>
          <Heading>
            You will be one of the first to experience {companyName} when we
            launch
          </Heading>
        </ModalBody>

        <ModalFooter>
          <Button w="full" colorScheme="teal" onClick={onClose}>
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
