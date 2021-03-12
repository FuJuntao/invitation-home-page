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
    screen.getByText(slogan);
  });

  it('renders request an invite button', () => {
    screen.getByText('Request an invite');
  });

  it('opens a modal when request an invite button is clicked', () => {
    fireEvent.click(screen.getByText('Request an invite'));
    screen.getByRole(/dialog/);
  });
});
