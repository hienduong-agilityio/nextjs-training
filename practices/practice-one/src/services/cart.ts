// Services
import { apiRequest, getProductById } from '@/services';

// Constants
import { API_URL, HTTP_METHODS } from '@/constants';

// Types
import type { ICart, ICartModifyPayload } from '@/interfaces';

/**
 * Fetch cart by userId
 * @param userId - The ID of the user
 */
export const getCartByUserId = async (userId: number): Promise<ICart> => {
  try {
    const carts = await apiRequest<ICart[]>({
      url: `${API_URL.CART}?userId=${userId}`,
      method: HTTP_METHODS.GET,
    });
    return carts.find((cart: ICart) => cart.userId === userId) || [];
  } catch (error) {
    throw new Error(`Failed to fetch cart for user ${userId}`);
  }
};

/**
 * Add or update a product in the cart
 *
 * @param userId - The ID of the user
 * @param payload - The product details to be added (productId and quantity)
 */
export const addToCart = async (
  userId: number,
  payload: ICartModifyPayload,
): Promise<ICart> => {
  // Fetch cart and product data
  const [cart, productData] = await Promise.all([
    getCartByUserId(userId),
    getProductById(payload.productId),
  ]);

  const discountPercentage = parseFloat(productData.discount ?? '0');

  // Find existing product in the cart
  const existingProduct = cart.products.find(
    (product) => product.id === payload.productId,
  );

  if (existingProduct) {
    // Update existing product quantity and totals
    existingProduct.quantity += payload.quantity;
    existingProduct.total = existingProduct.price * existingProduct.quantity;
    existingProduct.discountedTotal =
      existingProduct.total * (1 - discountPercentage / 100);
  } else {
    // Add new product to the cart
    const newProduct = {
      ...productData,
      title: productData.name,
      quantity: payload.quantity,
      total: productData.price * payload.quantity,
      discountPercentage,
      discountedTotal:
        productData.price * payload.quantity * (1 - discountPercentage / 100),
      thumbnail: productData.images[0] || '',
    };

    cart.products.push(newProduct);
  }

  // Recalculate cart totals
  const { total, discountedTotal, totalQuantity } = cart.products.reduce(
    (acc, product) => {
      acc.total += product.total ?? 0;
      acc.discountedTotal += product.discountedTotal ?? 0;
      acc.totalQuantity += product.quantity;
      return acc;
    },
    { total: 0, discountedTotal: 0, totalQuantity: 0 },
  );

  Object.assign(cart, {
    total,
    discountedTotal,
    totalQuantity,
    totalProducts: cart.products.length,
  });

  // Update cart via API
  return apiRequest<ICart>({
    url: `${API_URL.CART}/${cart.id}`,
    method: HTTP_METHODS.PUT,
    data: cart,
  });
};
