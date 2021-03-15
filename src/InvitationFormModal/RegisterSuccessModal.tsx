import { Button } from '@chakra-ui/button';
import { useBreakpointValue } from '@chakra-ui/media-query';
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
  const size = useBreakpointValue({ base: 'xs', sm: 'md' });

  return (
    <Modal isCentered onClose={onClose} size={size} {...otherProps}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" fontSize="3xl" color="teal.500">
          All done!
        </ModalHeader>

        <ModalBody textAlign="center" fontSize="lg" my="4">
          You will be one of the first to experience {companyName} when we
          launch
        </ModalBody>

        <ModalFooter>
          <Button w="full" colorScheme="teal" onClick={onClose}>
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
