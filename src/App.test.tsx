import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';
import { slogan } from './shared/texts';

describe('<App>', () => {
  it('renders slogan', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(slogan);
    expect(document.body.contains(linkElement));
  });
});
