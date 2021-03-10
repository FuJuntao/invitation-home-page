import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('renders slogan', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('A better way to enjoy every day.');
    expect(document.body.contains(linkElement));
  });
});
