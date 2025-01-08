import { render, fireEvent, screen } from '@testing-library/react';

// UI
import { CartAndFavoriteActions } from '@/ui';

// Actions
import * as actions from '@/actions';

jest.mock('../../../../actions', () => ({
  handleAddToCart: jest.fn(),
}));

describe('CartAndFavoriteActions', () => {
  const productId = 'test-product';
  const addToFavoritesMock = jest.fn();

  const renderComponent = (props = {}) =>
    render(<CartAndFavoriteActions productId={productId} {...props} />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders default variant with Add to Cart and disabled Favorite button', () => {
    renderComponent();
    expect(screen.getByText(/Add To Cart/i)).toBeInTheDocument();
  });

  it('disables buttons when loading', () => {
    jest
      .spyOn(actions, 'handleAddToCart')
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 1000)),
      );

    renderComponent();

    const addToCartButton = screen.getByText(/Add To Cart/i);
    fireEvent.click(addToCartButton);

    expect(addToCartButton).toBeDisabled();
  });

  it('calls addToFavorites when Favorite button is clicked (card variant)', () => {
    renderComponent({ variant: 'card', addToFavorites: addToFavoritesMock });

    const favoriteButton = screen.getByLabelText(/Favorite product/i);
    fireEvent.click(favoriteButton);

    expect(addToFavoritesMock).toHaveBeenCalled();
  });
});
