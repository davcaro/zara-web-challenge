import '@testing-library/jest-dom/vitest';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { AppRoutes } from '@/routes';

describe('AppRoutes', () => {
  it('should render the app routes', () => {
    const { container } = render(<AppRoutes />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
