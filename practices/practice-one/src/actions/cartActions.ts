'use server';

// Libraries
import { revalidatePath } from 'next/cache';

// Services
import { addToCart } from '@/services';

// Constants
import { ROUTE, TOAST_MESSAGES } from '@/constants';

/**
 * Server action to add a product to the cart.
 * @param userId - The ID of the user
 * @param productId - The ID of the product
 * @param quantity - Quantity to add
 * @param maxQuantity - Max quantity to add
 * @returns {boolean} - Success or failure of the operation
 */
export async function handleAddToCart({
  userId,
  productId,
  quantity,
  maxQuantity,
}: {
  userId: number;
  productId: string;
  quantity: number;
  maxQuantity: number;
}): Promise<boolean> {
  try {
    const { success } = await addToCart(userId, {
      productId,
      quantity,
      maxQuantity,
    });

    if (success) {
      revalidatePath(ROUTE.CART);
      revalidatePath(ROUTE.ROOT);
    }

    return success;
  } catch (error) {
    throw new Error(TOAST_MESSAGES.API_ERROR);
  }
}
