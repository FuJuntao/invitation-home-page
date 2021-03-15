import { useDisclosure } from '@chakra-ui/hooks';
import { Modal, ModalOverlay, ModalProps } from '@chakra-ui/modal';
import React from 'react';
import InvitationForm from './InvitationForm';
import RegisterSuccessModal from './RegisterSuccessModal';

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

      <RegisterSuccessModal
        isOpen={isSuccessDialogOpen}
        onClose={onSuccessDialogClose}
      />
    </>
  );
}
