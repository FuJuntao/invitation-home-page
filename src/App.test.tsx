import * as React from 'react';
import App from './App';
import { slogan } from './shared/texts';
import { render } from './test-utils';

describe('<App>', () => {
  it('renders slogan', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(slogan);
    expect(document.body.contains(linkElement));
  });
});
