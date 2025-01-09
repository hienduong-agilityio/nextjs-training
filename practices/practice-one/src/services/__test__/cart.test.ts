// Mocks
import { apiRequest } from '@/services';
import { getCartByUserId } from '@/services/cart';
import { API_URL, HTTP_METHODS } from '@/constants';

jest.mock('@/services', () => ({
  apiRequest: jest.fn(),
}));

describe('getCartByUserId', () => {
  const mockUserId = 123;
  const mockCart = {
    id: 'cart1',
    userId: mockUserId,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and return the cart for a given userId', async () => {
    (apiRequest as jest.Mock).mockResolvedValue([mockCart]);

    const result = await getCartByUserId(mockUserId);

    expect(apiRequest).toHaveBeenCalledWith({
      url: `${API_URL.CART}?userId=${mockUserId}`,
      method: HTTP_METHODS.GET,
    });
    expect(result).toEqual(mockCart);
  });

  it('should return an empty array if no cart is found for the userId', async () => {
    (apiRequest as jest.Mock).mockResolvedValue([]);

    const result = await getCartByUserId(mockUserId);

    expect(apiRequest).toHaveBeenCalledWith({
      url: `${API_URL.CART}?userId=${mockUserId}`,
      method: HTTP_METHODS.GET,
    });
    expect(result).toEqual([]);
  });

  it('should throw an error if the API request fails', async () => {
    const mockError = new Error('API request failed');
    (apiRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getCartByUserId(mockUserId)).rejects.toThrow(
      `Failed to fetch cart for user ${mockUserId}`,
    );

    expect(apiRequest).toHaveBeenCalledWith({
      url: `${API_URL.CART}?userId=${mockUserId}`,
      method: HTTP_METHODS.GET,
    });
  });
});
