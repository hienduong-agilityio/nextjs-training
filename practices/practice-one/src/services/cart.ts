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

/**
 * Add or update a product in the cart
 * @param userId - The ID of the user
 * @param payload - The product details to be added (productId and quantity)
 */
export const addToCart = async (
  userId: number,
  payload: ICartModifyPayload,
): Promise<ICart> => {
  const cart = await getCartByUserId(userId);

  if (!cart) throw new Error(`No cart found for user with ID ${userId}`);

  const productData = await getProductById(payload.productId);
  if (!productData)
    throw new Error(`Product with ID ${payload.productId} not found`);

  const discountPercentage = productData.discount
    ? parseFloat(productData.discount)
    : 0;
  const existingProduct = cart.products.find(
    (product) => product.id === payload.productId,
  );

  if (existingProduct) {
    existingProduct.quantity += payload.quantity;
    existingProduct.total = existingProduct.price * existingProduct.quantity;
    existingProduct.discountedTotal =
      existingProduct.total * (1 - discountPercentage / 100);
  } else {
    cart.products.push({
      id: productData.id,
      title: productData.name,
      price: productData.price,
      quantity: payload.quantity,
      total: productData.price * payload.quantity,
      discountPercentage,
      discountedTotal:
        productData.price * payload.quantity * (1 - discountPercentage / 100),
      thumbnail: productData.images[0] || '',
    });
  }

  cart.total = cart.products.reduce((sum, p) => sum + p.total, 0);
  cart.discountedTotal = cart.products.reduce(
    (sum, p) => sum + p.discountedTotal,
    0,
  );
  cart.totalQuantity = cart.products.reduce((sum, p) => sum + p.quantity, 0);
  cart.totalProducts = cart.products.length;

  return apiRequest<ICart>({
    url: `${API_URL.CART}/${cart.id}`,
    method: HTTP_METHODS.PUT,
    data: cart,
  });
};
