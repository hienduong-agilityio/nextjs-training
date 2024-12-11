// Libraries
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter, useSearchParams } from 'next/navigation';

// Components
import { Header } from '@/components';

// Mock the Next.js router and searchParams
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('Header Component - UI Tests', () => {
  beforeEach(() => {
    // Mock `useRouter` behavior
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });

    // Mock `useSearchParams` behavior
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams(''));
  });

  it('renders the header with default props and matches snapshot', () => {
    const { asFragment } = render(<Header />);

    // Snapshot test
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the logo with correct text', () => {
    render(<Header />);

    const logo = screen.getByLabelText('logo');
    expect(logo).toBeInTheDocument();
    expect(screen.getByText('E-Comm')).toBeInTheDocument();
  });

  it('renders the profile section', () => {
    render(<Header />);

    const profileIcon = screen.getByLabelText('profile');
    expect(profileIcon).toBeInTheDocument();
    expect(screen.getByText('My account')).toBeInTheDocument();
  });

  it('renders the cart section', () => {
    render(<Header />);

    const cartIcon = screen.getByLabelText('cart');
    expect(cartIcon).toBeInTheDocument();
  });

  it('renders the search box', () => {
    render(<Header />);

    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole('button', { name: /Search/i });
    expect(searchButton).toBeInTheDocument();
  });

  it('renders the cart item count if provided', () => {
    const cartItemCount = 3;
    render(<Header cartItemCount={cartItemCount} />);

    expect(screen.getByText(cartItemCount.toString())).toBeInTheDocument();
  });
});
