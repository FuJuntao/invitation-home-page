import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import React from 'react';
import Footer from './Footer';

describe('<Footer/>', () => {
  it('renders created place', () => {
    render(<Footer />);
    expect(screen.getAllByText(/Shanghai/)).not.null;
  });

  it('renders rights', () => {
    render(<Footer />);
    expect(screen.getAllByText(/All rights reserved/)).not.null;
  });
});
