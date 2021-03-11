/** @jsx jsx */
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Collapse } from '@chakra-ui/transition';
import { jsx } from '@emotion/react';
import { FieldInputProps, useField } from 'formik';
import type { ReactNode } from 'react';

type FormikFormControlProps<FieldValue> = FormControlProps & {
  id: string;
  label: ReactNode;
  children: (props: FieldInputProps<FieldValue>) => ReactNode;
};

export default function FormikFormControl<FieldValue = any>(
  props: FormikFormControlProps<FieldValue>,
) {
  const { id, label, children: renderChildren, ...otherProps } = props;

  const [childrenProps, { error, touched }] = useField<FieldValue>(id);

  return (
    <FormControl id={id} isInvalid={touched && !!error} {...otherProps}>
      <FormLabel>{label}</FormLabel>
      {renderChildren(childrenProps)}
      <Collapse in={!!error}>
        <FormErrorMessage>{error}</FormErrorMessage>
      </Collapse>
    </FormControl>
  );
}
