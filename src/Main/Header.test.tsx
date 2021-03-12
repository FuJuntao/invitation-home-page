import {
  fireEvent,
  getAllByDisplayValue,
  render,
  screen,
} from '@testing-library/react';
import { expect } from 'chai';
import React from 'react';
import { slogan } from '../shared/texts';
import Main from './Main';

describe('<Main/>', () => {
  render(<Main />);

  it('renders slogan', () => {
    expect(screen.getByText(slogan)).not.null;
  });

  const requestInviteButton = screen.getByText('Request an invite');

  it('renders request an invite button', () => {
    expect(requestInviteButton).not.null;
  });
});
