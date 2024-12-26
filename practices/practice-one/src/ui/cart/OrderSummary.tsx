// Components
import { Button } from '@/components';

// Enums
import { BUTTON_COLORS } from '@/enums';

export interface IOrderSummaryProps {
  subtotal: number;
  shippingFee: number;
  couponValue: number | null;
  total: number;
}

export const OrderSummary = ({
  summary = {
    subtotal: 0,
    shippingFee: 0,
    couponValue: null,
    total: 0,
  },
}: {
  summary?: IOrderSummaryProps;
}) => {
  const summaryItems = [
    { label: 'Subtotal', value: `$${summary.subtotal.toFixed(2)}` },
    { label: 'Shipping fee', value: `$${summary.shippingFee}` },
    {
      label: 'Coupon',
      value:
        summary.couponValue !== null
          ? `$${summary.couponValue.toFixed(2)}`
          : 'No',
    },
  ];

  return (
    <div className="w-full lg:w-1/2 2xl:w-1/4 space-y-4 p-4">
      {/* Summary Section */}
      <div className="flex flex-col gap-4 border-b-2 pb-4 border-secondary-100">
        {summaryItems.map((item) => (
          <div
            key={item.label}
            className="flex justify-between text-sm md:text-base lg:text-lg"
          >
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="flex justify-between text-lg md:text-2xl lg:text-3xl py-4">
        <span>Total</span>
        <span>${summary.total.toFixed(2)}</span>
      </div>

      {/* Button Section */}
      <Button
        disabled
        color={BUTTON_COLORS.PRIMARY}
        customClass="w-full py-3 md:py-4 text-sm md:text-base lg:text-lg"
      >
        Check out
      </Button>
    </div>
  );
};
