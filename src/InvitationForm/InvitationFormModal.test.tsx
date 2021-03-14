import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWrappedWithProviders as render } from '../test-utils';
import InvitationFormModal from './InvitationFormModal';

const OpenedInvitationFormModal = () => {
  return <InvitationFormModal isOpen onClose={() => {}} />;
};

describe('<InvitationForm/>', () => {
  it('renders error message when name input is not filled', async () => {
    render(<OpenedInvitationFormModal />);
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
});
