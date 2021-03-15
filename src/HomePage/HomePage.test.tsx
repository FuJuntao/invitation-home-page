import { render, screen } from '@testing-library/react';
import React from 'react';
import HomePage from './HomePage';

describe('<HomePage/>', () => {
  it('renders header', () => {
    render(<HomePage />);
    expect(screen.getByRole('banner')).not.toBeEmptyDOMElement();
  });

  it('renders main', () => {
    render(<HomePage />);
    expect(screen.getByRole('main')).not.toBeEmptyDOMElement();
  });

  it('renders footer', () => {
    render(<HomePage />);
    expect(screen.getByRole('contentinfo')).not.toBeEmptyDOMElement();
  });
});
