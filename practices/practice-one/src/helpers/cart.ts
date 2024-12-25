import { ICartItem } from '@/interfaces';

export const calculateCartSummary = (
  products: ICartItem[],
  shippingFee: number = 5,
  couponValue: number = 0,
) => {
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );
  const total = subtotal + shippingFee - couponValue;

  return {
    subtotal,
    shippingFee,
    couponValue,
    total,
  };
};
