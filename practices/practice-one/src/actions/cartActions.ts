'use server';

// Libraries
import { revalidatePath } from 'next/cache';

// Services
import { addToCart } from '@/services';

/**
 * Server action to add a product to the cart.
 * @param userId - The ID of the user
 * @param productId - The ID of the product
 * @param quantity - Quantity to add
 */
export async function handleAddToCart(
  userId: number,
  productId: string,
  quantity: number,
) {
  try {
    await addToCart(userId, { productId, quantity });

    revalidatePath('/cart');
    revalidatePath('/');
  } catch (error) {
    throw new Error(
      `Failed to add product to cart: ${(error as Error).message}`,
    );
  }
}
