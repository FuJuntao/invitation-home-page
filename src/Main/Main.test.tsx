import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { slogan } from '../shared/texts';
import { renderWrappedWithProviders } from '../test-utils';
import Main from './Main';

describe('<Main/>', () => {
  it('renders slogan', () => {
    renderWrappedWithProviders(<Main />);
    screen.getByRole('heading', { name: slogan });
  });

  it('opens modal when request an invite button is clicked', () => {
    renderWrappedWithProviders(<Main />);
    const requestAnInviteButton = screen.getByRole('button', {
      name: 'Request an invite',
    });
    userEvent.click(requestAnInviteButton);
    screen.getByRole('dialog', { name: 'Request an invite' });
  });
});
