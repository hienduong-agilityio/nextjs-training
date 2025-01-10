// Services
import { apiRequest, getProductById } from '@/services';
import {
  getCartByUserId,
  addToCart,
  updateProductFromCart,
  deleteProductFromCart,
  clearProductsCart,
} from '@/services/cart';

// Constants
import { API_URL, HTTP_METHODS } from '@/constants';

jest.mock('@/services', () => ({
  apiRequest: jest.fn(),
  getProductById: jest.fn(),
}));

jest.mock('@/services/cart', () => ({
  ...jest.requireActual('@/services/cart'),
}));

describe('Cart Service', () => {
  const mockUserId = 123;
  const mockProductId = 'prod1';
  const mockCart = {
    id: 'cart1',
    userId: mockUserId,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
  };

  const mockCartWithProduct = {
    ...mockCart,
    products: [
      {
        id: mockProductId,
        title: 'Product 1',
        price: 100,
        quantity: 1,
        total: 100,
        discountPercentage: 10,
        discountedTotal: 90,
        thumbnail: 'image.jpg',
      },
    ],
    total: 100,
    discountedTotal: 90,
    totalQuantity: 1,
  };

  const updatedCart = {
    ...mockCartWithProduct,
    products: [
      {
        ...mockCartWithProduct.products[0],
        quantity: 2,
        total: 200,
        discountedTotal: 180,
      },
    ],
    total: 200,
    discountedTotal: 180,
    totalQuantity: 2,
  };

  const mockProduct = {
    id: mockProductId,
    name: 'Product 1',
    price: 100,
    discount: '10',
    images: ['image.jpg'],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getCartByUserId', () => {
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
      (apiRequest as jest.Mock).mockRejectedValue(new Error('API Error'));

      await expect(getCartByUserId(mockUserId)).rejects.toThrow(
        `Failed to fetch cart for user ${mockUserId}`,
      );

      expect(apiRequest).toHaveBeenCalledWith({
        url: `${API_URL.CART}?userId=${mockUserId}`,
        method: HTTP_METHODS.GET,
      });
    });
  });

  describe('addToCart', () => {
    it('should update the existing product quantity, total, and discountedTotal', async () => {
      (apiRequest as jest.Mock)
        .mockResolvedValueOnce([mockCartWithProduct])
        .mockResolvedValueOnce(updatedCart);

      (getProductById as jest.Mock).mockResolvedValue(mockProduct);

      const payload = { productId: mockProductId, quantity: 2, maxQuantity: 5 };

      const result = await addToCart(mockUserId, payload);

      expect(apiRequest).toHaveBeenCalledWith({
        url: `${API_URL.CART}/${mockCartWithProduct.id}`,
        method: HTTP_METHODS.PUT,
        data: expect.objectContaining({
          products: expect.arrayContaining([
            expect.objectContaining({
              id: mockProductId,
              quantity: 3,
              total: 300,
              discountedTotal: 270,
            }),
          ]),
          total: 300,
          discountedTotal: 270,
          totalQuantity: 3,
        }),
      });

      expect(result).toEqual({ success: true });
    });

    it('should return false if the new quantity exceeds the maximum allowable quantity', async () => {
      (apiRequest as jest.Mock).mockResolvedValue([mockCartWithProduct]);
      (getProductById as jest.Mock).mockResolvedValue(mockProduct);

      const payload = { productId: mockProductId, quantity: 5, maxQuantity: 5 };

      const result = await addToCart(mockUserId, payload);

      expect(apiRequest).not.toHaveBeenCalledWith({
        url: `${API_URL.CART}/${mockCartWithProduct.id}`,
        method: HTTP_METHODS.PUT,
      });

      expect(result).toEqual({ success: false });
    });

    it('should add a new product to the cart', async () => {
      (apiRequest as jest.Mock).mockResolvedValue({});

      (getProductById as jest.Mock).mockResolvedValue(mockProduct);

      const payload = { productId: mockProductId, quantity: 1, maxQuantity: 5 };

      (apiRequest as jest.Mock)
        .mockResolvedValueOnce([mockCart])
        .mockResolvedValueOnce(mockCartWithProduct);

      const result = await addToCart(mockUserId, payload);

      expect(apiRequest).toHaveBeenCalledWith({
        url: `${API_URL.CART}/${mockCart.id}`,
        method: HTTP_METHODS.PUT,
        data: expect.objectContaining({
          total: expect.any(Number),
          discountedTotal: expect.any(Number),
          totalQuantity: expect.any(Number),
        }),
      });

      expect(result).toEqual({ success: true });
    });

    it('should throw an error if adding to the cart fails', async () => {
      (apiRequest as jest.Mock).mockRejectedValue(new Error('API Error'));

      const payload = { productId: mockProductId, quantity: 1, maxQuantity: 5 };

      await expect(addToCart(mockUserId, payload)).rejects.toThrow(
        `Failed to fetch cart for user ${mockUserId}`,
      );
    });
  });

  describe('updateProductFromCart', () => {
    it('should return false if the product does not exist in the cart', async () => {
      (apiRequest as jest.Mock).mockResolvedValueOnce([mockCart]);

      const newQuantity = 2;
      const result = await updateProductFromCart(
        mockUserId,
        mockProductId,
        newQuantity,
      );

      expect(apiRequest).not.toHaveBeenCalledWith({
        url: `${API_URL.CART}/${mockCart.id}`,
        method: HTTP_METHODS.PUT,
      });

      expect(result).toEqual({ success: false });
    });

    it('should return false if the new quantity is less than 1', async () => {
      (apiRequest as jest.Mock).mockResolvedValueOnce([mockCartWithProduct]);

      const newQuantity = 0;
      const result = await updateProductFromCart(
        mockUserId,
        mockProductId,
        newQuantity,
      );

      expect(apiRequest).not.toHaveBeenCalledWith({
        url: `${API_URL.CART}/${mockCartWithProduct.id}`,
        method: HTTP_METHODS.PUT,
      });

      expect(result).toEqual({ success: false });
    });
  });

  describe('deleteProductFromCart', () => {
    it('should delete a product from the cart successfully', async () => {
      (apiRequest as jest.Mock).mockResolvedValue(mockCart);
      (apiRequest as jest.Mock).mockResolvedValueOnce([mockCartWithProduct]);

      const result = await deleteProductFromCart(mockUserId, mockProductId);

      expect(apiRequest).toHaveBeenCalledWith({
        url: `${API_URL.CART}/${mockCartWithProduct.id}`,
        method: HTTP_METHODS.PUT,
        data: {
          ...mockCartWithProduct,
          products: [],
        },
      });

      expect(result).toEqual({ success: true });
    });

    it('should return false if the product is not found in the cart', async () => {
      (apiRequest as jest.Mock).mockResolvedValue(mockCart);

      const result = await deleteProductFromCart(mockUserId, mockProductId);

      expect(result).toEqual({ success: false });
    });

    it('should return false if deleting a product fails', async () => {
      (apiRequest as jest.Mock).mockRejectedValue(new Error('API Error'));

      const result = await deleteProductFromCart(mockUserId, mockProductId);

      expect(result).toEqual({ success: false });
    });
  });

  describe('clearProductsCart', () => {
    it('should clear all products from the cart successfully', async () => {
      (apiRequest as jest.Mock).mockResolvedValueOnce([mockCart]);
      (apiRequest as jest.Mock).mockResolvedValueOnce({ ...mockCart });

      const result = await clearProductsCart(mockUserId);

      expect(apiRequest).toHaveBeenNthCalledWith(1, {
        url: `${API_URL.CART}?userId=${mockUserId}`,
        method: HTTP_METHODS.GET,
      });

      expect(result).toEqual({ success: true });
    });

    it('should return false if clearing the cart fails', async () => {
      (apiRequest as jest.Mock).mockResolvedValueOnce([mockCart]);
      (apiRequest as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

      const result = await clearProductsCart(mockUserId);

      expect(apiRequest).toHaveBeenNthCalledWith(1, {
        url: `${API_URL.CART}?userId=${mockUserId}`,
        method: HTTP_METHODS.GET,
      });

      expect(result).toEqual({ success: false });
    });
  });
});
