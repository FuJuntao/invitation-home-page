import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, FormikProvider, useFormik } from 'formik';
import React, { useMemo } from 'react';
import * as yup from 'yup';
import FormikFormControl from './FormikFormControl';

interface Values {
  email: string;
}

const FormikForm = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().email().required(),
      }),
    [],
  );

  const formik = useFormik<Values>({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormikFormControl id="email" label="Email">
          {(props) => <Input {...props} />}
        </FormikFormControl>
        <Button type="submit">Submit</Button>
      </Form>
    </FormikProvider>
  );
};

describe('<FormikFormControl/>', () => {
  it('renders label', () => {
    render(<FormikForm />);
    screen.getByLabelText('Email');
  });

  it('renders error message when validation fails', async () => {
    render(<FormikForm />);
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-describedby');

    userEvent.type(screen.getByLabelText('Email'), 'a.com');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid');
    });
  });
});
