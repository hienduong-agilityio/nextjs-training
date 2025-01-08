import { render, screen } from '@testing-library/react';

// Layouts
import { Header } from '@/layouts';

// Constants
import { ROUTE } from '@/constants';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    query: {},
    asPath: '/',
  })),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => null),
    set: jest.fn(),
  })),
}));

jest.mock('react', () => {
  const originalReact = jest.requireActual('react');
  return {
    ...originalReact,
    useOptimistic: jest.fn(() => [false, jest.fn()]),
  };
});

describe('Header Component', () => {
  it('renders the logo with a link to the products page', () => {
    const { container } = render(<Header itemCount={3} />);

    const logoLink = screen.getByRole('link', { name: /logo/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', ROUTE.PRODUCTS);

    expect(container).toMatchSnapshot();
  });
});
