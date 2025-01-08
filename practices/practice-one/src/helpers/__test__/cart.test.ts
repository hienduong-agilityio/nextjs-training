// Helpers
import { calculateOrderSummary } from '@/helpers';

// Types
import type { ICartItem } from '@/interfaces';
import type { IOrderSummaryProps } from '@/ui';

describe('calculateOrderSummary', () => {
  const cartProducts: ICartItem[] = [
    {
      id: '1',
      title: 'Product 1',
      price: 10,
      quantity: 2,
      total: 20,
      thumbnail: '',
      discountPercentage: undefined,
      discountedTotal: undefined,
    },
    {
      id: '2',
      title: 'Product 2',
      price: 15,
      quantity: 1,
      total: 15,
      thumbnail: '',
      discountPercentage: undefined,
      discountedTotal: undefined,
    },
  ];

  it('should correctly calculate the order summary without coupon and shipping fee', () => {
    const result: IOrderSummaryProps = calculateOrderSummary(cartProducts);

    expect(result).toEqual({
      subtotal: 35.0,
      shippingFee: 0.0,
      couponValue: null,
      total: 35.0,
    });
  });

  it('should correctly calculate the order summary with a coupon value', () => {
    const couponValue = 5;
    const result: IOrderSummaryProps = calculateOrderSummary(
      cartProducts,
      couponValue,
    );

    expect(result).toEqual({
      subtotal: 35.0,
      shippingFee: 0.0,
      couponValue: 5.0,
      total: 30.0,
    });
  });

  it('should correctly calculate the order summary with a shipping fee', () => {
    const shippingFee = 10;
    const result: IOrderSummaryProps = calculateOrderSummary(
      cartProducts,
      null,
      shippingFee,
    );

    expect(result).toEqual({
      subtotal: 35.0,
      shippingFee: 10.0,
      couponValue: null,
      total: 45.0,
    });
  });

  it('should correctly calculate the order summary with both coupon and shipping fee', () => {
    const couponValue = 5;
    const shippingFee = 10;
    const result: IOrderSummaryProps = calculateOrderSummary(
      cartProducts,
      couponValue,
      shippingFee,
    );

    expect(result).toEqual({
      subtotal: 35.0,
      shippingFee: 10.0,
      couponValue: 5.0,
      total: 40.0,
    });
  });

  it('should handle an empty cart', () => {
    const result: IOrderSummaryProps = calculateOrderSummary([], null, 0);

    expect(result).toEqual({
      subtotal: 0.0,
      shippingFee: 0.0,
      couponValue: null,
      total: 0.0,
    });
  });

  it('should handle null couponValue gracefully', () => {
    const result: IOrderSummaryProps = calculateOrderSummary(
      cartProducts,
      null,
      10,
    );

    expect(result).toEqual({
      subtotal: 35.0,
      shippingFee: 10.0,
      couponValue: null,
      total: 45.0,
    });
  });
});
