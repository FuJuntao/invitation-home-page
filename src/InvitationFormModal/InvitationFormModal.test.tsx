import { useDisclosure } from '@chakra-ui/hooks';
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { renderWrappedWithProviders as render } from '../test-utils';
import InvitationFormModal from './InvitationFormModal';

const usedEmail = 'usedemail@airwallex.com';

const server = setupServer(
  rest.post<{ name: string; email: string }>('/fake-auth', (req, res, ctx) => {
    const email = req.body?.email;
    if (email === usedEmail) {
      return res(
        ctx.status(400),
        ctx.body(
          JSON.stringify({
            errorMessage: 'Bad Request: Email is already in use',
          }),
        ),
      );
    } else {
      return res(ctx.status(200), ctx.body('Registered'));
    }
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const OpenedInvitationFormModal = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return <InvitationFormModal isOpen={isOpen} onClose={onClose} />;
};

describe('<InvitationForm/>', () => {
  it('renders error message when full name is not filled', async () => {
    render(<OpenedInvitationFormModal />);
    userEvent.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Full name')).toHaveAttribute(
        'aria-invalid',
      );
    });
  });

  it('renders error message when full name is less than 3 letters', async () => {
    render(<OpenedInvitationFormModal />);
    userEvent.type(screen.getByLabelText('Full name'), 'he');
    userEvent.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Full name')).toHaveAttribute(
        'aria-invalid',
      );
    });
  });

  it('renders error message when email is not filled', async () => {
    render(<OpenedInvitationFormModal />);
    userEvent.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid');
    });
  });

  it('renders error message when email is not valid', async () => {
    render(<OpenedInvitationFormModal />);
    userEvent.type(screen.getByLabelText('Email'), 'a.com');
    userEvent.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid');
    });
  });

  it('renders error message when confirm email is not filled', async () => {
    render(<OpenedInvitationFormModal />);
    userEvent.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Confirm Email')).toHaveAttribute(
        'aria-invalid',
      );
    });
  });

  it('renders error message when confirm email is not valid', async () => {
    render(<OpenedInvitationFormModal />);
    userEvent.type(screen.getByLabelText('Confirm Email'), 'a.com');
    userEvent.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Confirm Email')).toHaveAttribute(
        'aria-invalid',
      );
    });
  });

  it('renders error message when confirm email is not the same as email', async () => {
    render(<OpenedInvitationFormModal />);
    userEvent.type(screen.getByLabelText('Email'), 'd@f.com');
    userEvent.type(screen.getByLabelText('Confirm Email'), 'a@b.com');
    userEvent.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Confirm Email')).toHaveAttribute(
        'aria-invalid',
      );
    });
  });

  it('handles error from server', async () => {
    render(<OpenedInvitationFormModal />);

    userEvent.type(screen.getByLabelText('Full name'), 'hello');
    userEvent.type(screen.getByLabelText('Email'), usedEmail);
    userEvent.type(screen.getByLabelText('Confirm Email'), usedEmail);
    userEvent.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /.*Send/ })).toHaveAttribute(
        'data-loading',
      );
    });

    expect(await screen.findByRole('alert')).not.toBeEmptyDOMElement();
  });

  it('renders success dialog when request is successful', async () => {
    render(<OpenedInvitationFormModal />);

    userEvent.type(screen.getByLabelText('Full name'), 'hello');
    userEvent.type(screen.getByLabelText('Email'), 'a@b.com');
    userEvent.type(screen.getByLabelText('Confirm Email'), 'a@b.com');
    userEvent.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /.*Send/ })).toHaveAttribute(
        'data-loading',
      );
    });

    const requestAnInviteModal = screen.getByRole('dialog', {
      name: 'Request an invite',
    });
    await waitForElementToBeRemoved(requestAnInviteModal);

    const successDialog = await screen.findByRole('dialog', {
      name: /all done/i,
    });
    expect(successDialog).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /ok/i }));
    await waitForElementToBeRemoved(successDialog);
  });
});
