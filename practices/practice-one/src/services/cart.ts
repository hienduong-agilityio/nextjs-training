// Services
import { ICart } from '@/interfaces';
import { apiRequest } from './api';

// Constants
import { API_URL, HTTP_METHODS } from '@/constants';

/**
 * Fetch cart by userId
 * @param userId - The ID of the user
 */
export const getCartByUserId = async (
  userId: number,
): Promise<ICart | null> => {
  try {
    // Fetch carts filtered by userId
    const carts = await apiRequest<ICart[]>({
      url: `${API_URL.CART}?userId=${userId}`,
      method: HTTP_METHODS.GET,
    });

    // Ensure we only return the cart matching the exact userId
    const cart = carts.find((cart: ICart) => cart.userId === userId) || null;

    if (!cart) {
      throw new Error(`No cart found for user with ID ${userId}`);
    }

    return cart;
  } catch (error) {
    throw new Error(
      (error as Error).message || `Failed to fetch cart for user ${userId}`,
    );
  }
};
