'use server';

// Libraries
import { revalidatePath } from 'next/cache';

// Services
import {
  addToCart,
  clearProductsCart,
  deleteProductFromCart,
  updateProductFromCart,
} from '@/services';

// Constants
import { ROUTE, TOAST_MESSAGES } from '@/constants';

// Types
import type { ICartModifyPayload } from '@/interfaces';

/**
 * Utility function to handle cart updates with revalidation and error handling.
 * @param action - The async function to perform the cart operation.
 * @param args - Arguments to pass to the action.
 *
 * @returns {boolean} - Success or failure of the operation.
 */
async function handleCartOperation<
  T extends
    | Parameters<typeof addToCart>
    | Parameters<typeof deleteProductFromCart>
    | Parameters<typeof updateProductFromCart>
    | Parameters<typeof clearProductsCart>,
>(
  action: (...args: T) => Promise<{ success: boolean }>,
  args: T,
): Promise<boolean> {
  try {
    const { success } = await action(...args);

    if (success) {
      revalidatePath(ROUTE.CART);
      revalidatePath(ROUTE.CHECKOUT);
      revalidatePath(ROUTE.ROOT);
    }

    return success;
  } catch (error) {
    throw new Error(TOAST_MESSAGES.API_ERROR);
  }
}

/**
 * Server action to add a product to the cart.
 * @param payload - Product modification payload including productId, quantity, and maxQuantity
 */
export async function handleAddToCart({
  userId,
  payload,
}: {
  userId: number;
  payload: ICartModifyPayload;
}): Promise<boolean> {
  return handleCartOperation(addToCart, [userId, payload]);
}

/**
 * Server action to remove a product from the cart.
 */
export async function handleDeleteProductFromCart({
  userId,
  productId,
}: {
  userId: number;
  productId: string;
}): Promise<boolean> {
  return handleCartOperation(deleteProductFromCart, [userId, productId]);
}

/**
 * Server action to update the quantity of a product in the cart.
 *
 * @param newQuantity - The new quantity of the product
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
  return handleCartOperation(updateProductFromCart, [
    userId,
    productId,
    newQuantity,
  ]);
}

/**
 * Server action to clear all products from the cart.
 */
export async function handleClearProductFromCart(userId: number) {
  return handleCartOperation(clearProductsCart, [userId]);
}
