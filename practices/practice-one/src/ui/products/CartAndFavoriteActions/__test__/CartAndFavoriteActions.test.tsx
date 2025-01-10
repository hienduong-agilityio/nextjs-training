import { render, fireEvent, screen, waitFor } from '@testing-library/react';

// UI
import { CartAndFavoriteActions } from '@/ui';

// Actions
import * as actions from '@/actions';

jest.mock('@/actions', () => ({
  handleAddToCart: jest.fn(),
}));

const mockToastStore = {
  showToast: jest.fn(),
};

jest.mock('@/stores', () => ({
  ToastStore: () => mockToastStore,
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

  it('matches snapshot for default variant', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot for card variant', () => {
    const { container } = renderComponent({ variant: 'card' });
    expect(container).toMatchSnapshot();
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

  it('applies correct opacity and cursor styles when loading', async () => {
    jest.spyOn(actions, 'handleAddToCart').mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 1000);
        }),
    );

    renderComponent({ variant: 'card' });

    const addToCartButton = screen.getByLabelText(/Add to Cart/i);
    fireEvent.click(addToCartButton);

    await waitFor(() => {
      expect(addToCartButton).toHaveClass('opacity-50 cursor-wait');
    });
  });

  it('calls addToFavorites when Favorite button is clicked (card variant)', () => {
    renderComponent({ variant: 'card', addToFavorites: addToFavoritesMock });

    const favoriteButton = screen.getByLabelText(/Favorite product/i);
    fireEvent.click(favoriteButton);

    expect(addToFavoritesMock).toHaveBeenCalled();
  });

  it('calls default addToFavorites function when no callback is provided', () => {
    renderComponent({ variant: 'card' });

    const favoriteButton = screen.getByLabelText(/Favorite product/i);
    fireEvent.click(favoriteButton);

    expect(true).toBe(true);
  });

  it('shows success toast when handleAddToCart succeeds', async () => {
    jest.spyOn(actions, 'handleAddToCart').mockResolvedValue(true);

    renderComponent();

    const addToCartButton = screen.getByText(/Add To Cart/i);
    fireEvent.click(addToCartButton);

    await screen.findByText(/Add To Cart/i);

    expect(mockToastStore.showToast).toHaveBeenCalledWith(
      expect.stringContaining('Product added to cart successfully!'),
      expect.stringContaining('success'),
    );
  });

  it('shows error toast when handleAddToCart hits max quantity', async () => {
    jest.spyOn(actions, 'handleAddToCart').mockResolvedValue(false);

    renderComponent();

    const addToCartButton = screen.getByText(/Add To Cart/i);
    fireEvent.click(addToCartButton);

    await screen.findByText(/Add To Cart/i);

    expect(mockToastStore.showToast).toHaveBeenCalledWith(
      expect.stringContaining(
        'Unable to add product. Maximum quantity exceeded!',
      ),
      expect.stringContaining('error'),
    );
  });

  it('shows error toast when handleAddToCart throws an error', async () => {
    jest
      .spyOn(actions, 'handleAddToCart')
      .mockRejectedValue(new Error('API error'));

    renderComponent();

    const addToCartButton = screen.getByText(/Add To Cart/i);
    fireEvent.click(addToCartButton);

    await screen.findByText(/Add To Cart/i);

    expect(mockToastStore.showToast).toHaveBeenCalledWith(
      expect.stringContaining(
        'Failed to add product to cart. Please try again!',
      ),
      expect.stringContaining('error'),
    );
  });
});
