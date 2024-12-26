// UI
import { IOrderSummaryProps } from '@/ui';

// Interfaces
import type { ICartItem } from '@/interfaces';

export const calculateOrderSummary = (
  cartProducts: ICartItem[],
  couponValue: number | null = 0,
  shippingFee: number = 0,
): IOrderSummaryProps => {
  const subtotal = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  const finalCouponValue = couponValue ?? 0;

  const total = subtotal + shippingFee - finalCouponValue;

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    shippingFee: parseFloat(shippingFee.toFixed(2)),
    couponValue:
      finalCouponValue !== 0 ? parseFloat(finalCouponValue.toFixed(2)) : null,
    total: parseFloat(total.toFixed(2)),
  };
};
