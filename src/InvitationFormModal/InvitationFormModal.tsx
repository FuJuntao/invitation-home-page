import { useDisclosure } from '@chakra-ui/hooks';
import { useBreakpointValue } from '@chakra-ui/media-query';
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
  const size = useBreakpointValue({ base: 'xs', sm: 'md' });

  return (
    <>
      <Modal isCentered onClose={onClose} size={size} {...otherProps}>
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
