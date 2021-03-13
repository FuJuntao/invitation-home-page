import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('<Footer/>', () => {
  it('renders created place', () => {
    render(<Footer />);
    screen.getByRole('heading', { name: /Shanghai/ });
  });

  it('renders rights', () => {
    render(<Footer />);
    screen.getByRole('heading', { name: /All rights reserved/ });
  });
});
