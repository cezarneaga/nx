import { render } from '@testing-library/react';

import ButtonLink from './button-link';

describe('ButtonLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonLink to="/hello">Hello</ButtonLink>);
    expect(baseElement).toBeTruthy();
  });
});
