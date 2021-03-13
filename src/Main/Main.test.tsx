import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { slogan } from '../shared/texts';
import Main from './Main';

describe('<Main/>', () => {
  it('renders slogan', () => {
    render(<Main />);
    screen.getByRole('heading', { name: slogan });
  });

  it('opens modal when request an invite button is clicked', () => {
    render(<Main />);
    const requestAnInviteButton = screen.getByRole('button', {
      name: 'Request an invite',
    });
    userEvent.click(requestAnInviteButton);
    screen.getByRole('dialog', { name: 'Request an invite' });
  });
});
