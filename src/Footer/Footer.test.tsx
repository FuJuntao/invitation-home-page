import { screen } from '@testing-library/react';
import React from 'react';
import { render } from '../test-utils';
import Footer from './Footer';

describe('<Footer/>', () => {
  it('renders created place', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toContainElement(
      screen.getByRole('heading', { name: /shanghai/i }),
    );
  });

  it('renders rights', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toContainElement(
      screen.getByRole('heading', { name: /all rights reserved/i }),
    );
  });
});
