import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect } from 'chai';
import { companyName } from '../shared/texts';
import Header from './Header';

describe('<Header/>', () => {
  it('renders company name', () => {
    render(<Header />);
    screen.getByText(companyName);
  });
});
