import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('<Footer/>', () => {
  it('renders created place', () => {
    render(<Footer />);
    screen.getByText(/Shanghai/);
  });

  it('renders rights', () => {
    render(<Footer />);
    screen.getByText(/All rights reserved/);
  });
});
