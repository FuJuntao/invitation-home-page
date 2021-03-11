/** @jsx jsx */
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/modal';
import { jsx } from '@emotion/react';
import { Form, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import FormikFormControl from './FormikInput';

const initialValues = {
  fullName: '',
  email: '',
  confirmEmail: '',
};

const validationSchema = yup.object({
  fullName: yup.string().label('Full name').required(),
  email: yup.string().email().label('Email').required(),
  confirmEmail: yup
    .string()
    .email()
    .label('Confirm Email')
    .required()
    .test(
      'is-the-same-as-email',
      'Email is not the same',
      (value, testContext) => value === testContext.parent.email,
    ),
});

function InvitationForm() {
  const onSubmit = () => {};

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <ModalContent>
      <ModalHeader textAlign="center">Request an invite</ModalHeader>
      <ModalCloseButton />

      <FormikProvider value={formik}>
        <Form>
          <ModalBody>
            <VStack spacing={4}>
              <FormikFormControl id="fullName" label="Full name">
                {(fieldProps) => (
                  <Input {...fieldProps} placeholder="Full name" />
                )}
              </FormikFormControl>

              <FormikFormControl id="email" label="Email">
                {(fieldProps) => (
                  <Input {...fieldProps} type="email" placeholder="Email" />
                )}
              </FormikFormControl>

              <FormikFormControl id="confirmEmail" label="Confirm Email">
                {(fieldProps) => (
                  <Input
                    {...fieldProps}
                    type="email"
                    placeholder="Confirm Email"
                  />
                )}
              </FormikFormControl>
            </VStack>
          </ModalBody>

          <ModalFooter mt={4} justifyContent="center">
            <Button size="lg" width="full" type="submit">
              Send
            </Button>
          </ModalFooter>
        </Form>
      </FormikProvider>
    </ModalContent>
  );
}

export default InvitationForm;
