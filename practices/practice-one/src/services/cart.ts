// Services
import { apiRequest } from '@/services';

// Constants
import { API_URL, HTTP_METHODS } from '@/constants';

// Types
import type { ICart } from '@/interfaces';

/**
 * Fetch cart by userId
 * @param userId - The ID of the user
 */
export const getCartByUserId = async (
  userId: number,
): Promise<ICart | null> => {
  try {
    const carts = await apiRequest<ICart[]>({
      url: `${API_URL.CART}?userId=${userId}`,
      method: HTTP_METHODS.GET,
    });
    return carts.find((cart: ICart) => cart.userId === userId) || null;
  } catch (error) {
    throw new Error(`Failed to fetch cart for user ${userId}`);
  }
};
