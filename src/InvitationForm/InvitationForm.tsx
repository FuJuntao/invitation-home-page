import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Text, VStack } from '@chakra-ui/layout';
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/modal';
import { ScaleFade } from '@chakra-ui/transition';
import axios, { AxiosError } from 'axios';
import { Form, FormikProvider, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useAxios } from '../axios';
import FormikFormControl from '../FormikFormControl';

interface RequestData {
  name: string;
  email: string;
}

const initialValues = {
  name: '',
  email: '',
  confirmEmail: '',
};

const validationSchema = yup.object({
  name: yup.string().label('Full name').required(),
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

type InvitationFormProps = {
  onSucceeded: () => void;
};

function InvitationForm(props: InvitationFormProps) {
  const { onSucceeded } = props;
  const axiosInstance = useAxios();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (values: typeof initialValues) => {
    try {
      setErrorMessage('');
      const requestData: RequestData = {
        name: values.name,
        email: values.email,
      };
      await axiosInstance.post<string>('fake-auth', requestData);
      onSucceeded();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError<{ errorMessage: string }> = error;
        setErrorMessage(
          axiosError.response?.data?.errorMessage ?? axiosError.message,
        );
      }
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <ModalContent>
      <ModalHeader textAlign="center">Request an invite</ModalHeader>
      <ModalCloseButton />

      <FormikProvider value={formik}>
        <Form>
          <ModalBody>
            <VStack spacing={4}>
              <FormikFormControl id="name" label="Full name">
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

            <ScaleFade in={!!errorMessage}>
              <Text mt={4} color="red" textAlign="center">
                {errorMessage}
              </Text>
            </ScaleFade>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              size="lg"
              width="full"
              type="submit"
              isLoading={formik.isSubmitting}
            >
              Send
            </Button>
          </ModalFooter>
        </Form>
      </FormikProvider>
    </ModalContent>
  );
}

export default InvitationForm;
