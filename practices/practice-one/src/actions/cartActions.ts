'use server';

// Libraries
import { revalidatePath } from 'next/cache';

// Services
import { addToCart, deleteFromCart, updateProductFromCart } from '@/services';

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

/**
 * Server action to remove a product from the cart.
 * @param userId - The ID of the user
 * @param productId - The ID of the product to remove
 * @returns {boolean} - Success or failure of the operation
 */
export async function handleRemoveFromCart({
  userId,
  productId,
}: {
  userId: number;
  productId: string;
}): Promise<boolean> {
  try {
    const { success } = await deleteFromCart(userId, productId);

    if (success) {
      revalidatePath(ROUTE.CART);
      revalidatePath(ROUTE.ROOT);
    }

    return success;
  } catch (error) {
    throw new Error(TOAST_MESSAGES.API_ERROR);
  }
}

/**
 * Server action to update the quantity of a product in the cart.
 * @param userId - The ID of the user
 * @param productId - The ID of the product
 * @param newQuantity - The new quantity of the product
 * @returns {boolean} - Success or failure of the operation
 */
export async function handleUpdateProductInCart({
  userId,
  productId,
  newQuantity,
}: {
  userId: number;
  productId: string;
  newQuantity: number;
}): Promise<boolean> {
  try {
    const { success } = await updateProductFromCart(
      userId,
      productId,
      newQuantity,
    );

    if (success) {
      revalidatePath(ROUTE.CART);
      revalidatePath(ROUTE.ROOT);
    }

    return success;
  } catch (error) {
    throw new Error(TOAST_MESSAGES.API_ERROR);
  }
}
