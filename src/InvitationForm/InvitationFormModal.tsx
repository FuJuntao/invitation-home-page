import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
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
import InvitationForm from './InvitationForm';

type InvitationFormModalProps = Omit<ModalProps, 'children'>;

export default function InvitationFormModal(props: InvitationFormModalProps) {
  const { onClose, ...otherProps } = props;
  const {
    isOpen: isSuccessDialogOpen,
    onOpen: onSuccessDialogOpen,
    onClose: onSuccessDialogClose,
  } = useDisclosure();

  return (
    <>
      <Modal isCentered onClose={onClose} {...otherProps}>
        <ModalOverlay />
        <InvitationForm
          onSucceeded={() => {
            onClose();
            onSuccessDialogOpen();
          }}
        />
      </Modal>

      <Modal
        isCentered
        isOpen={isSuccessDialogOpen}
        onClose={onSuccessDialogClose}
      >
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
            <Button w="full" onClick={onSuccessDialogClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
