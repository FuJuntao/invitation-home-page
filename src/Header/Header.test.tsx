import { render, screen } from '@testing-library/react';
import React from 'react';
import { companyName } from '../shared/texts';
import Header from './Header';

describe('<Header/>', () => {
  it('renders company name', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toContainElement(
      screen.getByRole('heading', { name: companyName }),
    );
  });
});
