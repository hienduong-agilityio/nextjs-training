import { revalidatePath } from 'next/cache';

// Actions
import {
  handleAddToCart,
  handleDeleteProductFromCart,
  handleUpdateProductInCart,
  handleClearProductFromCart,
} from '@/actions';

// Services
import {
  addToCart,
  deleteProductFromCart,
  updateProductFromCart,
  clearProductsCart,
} from '@/services';

// Constants
import { TOAST_MESSAGES, ROUTE } from '@/constants';

jest.mock('@/services', () => ({
  addToCart: jest.fn(),
  deleteProductFromCart: jest.fn(),
  updateProductFromCart: jest.fn(),
  clearProductsCart: jest.fn(),
}));

jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}));

describe('Cart Actions', () => {
  const userId = 1;
  const productId = '123';
  const payload = { productId, quantity: 2, maxQuantity: 5 };
  const newQuantity = 3;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('handleAddToCart', () => {
    it('should revalidate paths and return true on success', async () => {
      (addToCart as jest.Mock).mockResolvedValueOnce({ success: true });

      const result = await handleAddToCart({ userId, payload });

      expect(addToCart).toHaveBeenCalledWith(userId, payload);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.CART);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.CHECKOUT);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.PRODUCTS);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.ROOT, 'layout');
      expect(result).toBe(true);
    });

    it('should throw an error on failure', async () => {
      (addToCart as jest.Mock).mockRejectedValueOnce(new Error('Error'));

      await expect(handleAddToCart({ userId, payload })).rejects.toThrow(
        TOAST_MESSAGES.API_ERROR,
      );
    });
  });

  describe('handleDeleteProductFromCart', () => {
    it('should revalidate paths and return true on success', async () => {
      (deleteProductFromCart as jest.Mock).mockResolvedValueOnce({
        success: true,
      });

      const result = await handleDeleteProductFromCart({ userId, productId });

      expect(deleteProductFromCart).toHaveBeenCalledWith(userId, productId);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.CART);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.CHECKOUT);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.PRODUCTS);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.ROOT, 'layout');
      expect(result).toBe(true);
    });

    it('should throw an error on failure', async () => {
      (deleteProductFromCart as jest.Mock).mockRejectedValueOnce(
        new Error('Error'),
      );

      await expect(
        handleDeleteProductFromCart({ userId, productId }),
      ).rejects.toThrow(TOAST_MESSAGES.API_ERROR);
    });
  });

  describe('handleUpdateProductInCart', () => {
    it('should revalidate paths and return true on success', async () => {
      (updateProductFromCart as jest.Mock).mockResolvedValueOnce({
        success: true,
      });

      const result = await handleUpdateProductInCart({
        userId,
        productId,
        newQuantity,
      });

      expect(updateProductFromCart).toHaveBeenCalledWith(
        userId,
        productId,
        newQuantity,
      );
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.CART);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.CHECKOUT);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.PRODUCTS);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.ROOT, 'layout');
      expect(result).toBe(true);
    });

    it('should throw an error on failure', async () => {
      (updateProductFromCart as jest.Mock).mockRejectedValueOnce(
        new Error('Error'),
      );

      await expect(
        handleUpdateProductInCart({ userId, productId, newQuantity }),
      ).rejects.toThrow(TOAST_MESSAGES.API_ERROR);
    });
  });

  describe('handleClearProductFromCart', () => {
    it('should revalidate paths and return true on success', async () => {
      (clearProductsCart as jest.Mock).mockResolvedValueOnce({ success: true });

      const result = await handleClearProductFromCart(userId);

      expect(clearProductsCart).toHaveBeenCalledWith(userId);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.CART);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.CHECKOUT);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.PRODUCTS);
      expect(revalidatePath).toHaveBeenCalledWith(ROUTE.ROOT, 'layout');
      expect(result).toBe(true);
    });

    it('should throw an error on failure', async () => {
      (clearProductsCart as jest.Mock).mockRejectedValueOnce(
        new Error('Error'),
      );

      await expect(handleClearProductFromCart(userId)).rejects.toThrow(
        TOAST_MESSAGES.API_ERROR,
      );
    });
  });
});
