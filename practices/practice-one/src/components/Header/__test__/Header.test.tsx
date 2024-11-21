// Libraries
import { render, screen } from '@testing-library/react';

// Components
import { Header } from '@/components';

describe('Header component', () => {
  it('renders the icon components', () => {
    const { asFragment } = render(<Header />);

    const logo = screen.getByLabelText('logo');
    const profileIcon = screen.getByLabelText('profile');
    const cartIcon = screen.getByLabelText('cart');

    expect(logo).toBeInTheDocument();
    expect(screen.getByText('E-Comm')).toBeInTheDocument();

    expect(profileIcon).toBeInTheDocument();
    expect(screen.getByText('My account')).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the cart section with item count', () => {
    const cartItemCount = 5;
    const { asFragment } = render(<Header cartItemCount={cartItemCount} />);

    expect(screen.getByText(cartItemCount.toString())).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the search box', () => {
    render(<Header />);

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});
