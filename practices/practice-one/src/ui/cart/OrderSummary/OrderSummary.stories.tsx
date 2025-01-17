import type { Meta, StoryFn } from '@storybook/react';

// UI
import { OrderSummary, IOrderSummaryProps } from '@/ui';

// Mocks
import { ORDER_SUMMARY } from '@/mocks';

export default {
  title: 'UI/Cart/OrderSummary',
  component: OrderSummary,
  parameters: {
    docs: {
      description: {
        component:
          'The `OrderSummary` component displays a breakdown of order costs including subtotal, shipping fee, coupon value, and total amount. It also provides a checkout button that integrates with the cart clearing logic.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    summary: {
      description: 'Object containing order summary details.',
      control: 'object',
      table: { category: 'Primary' },
    },
  },
} as Meta;

// Default Template
const Template: StoryFn<{ summary: IOrderSummaryProps }> = (args) => (
  <div className="w-[50svw] space-y-20 px-4 sm:px-6 lg:px-8">
    <section className="w-full flex justify-center gap-6 lg:flex-row ">
      <OrderSummary {...args} />
    </section>
  </div>
);

export const OrderSummaryWithData = Template.bind({});
OrderSummaryWithData.args = {
  summary: ORDER_SUMMARY.withData,
};
OrderSummaryWithData.parameters = {
  docs: {
    description: {
      story:
        'The `Default` story shows the `OrderSummary` component with a typical order breakdown.',
    },
  },
};

export const OrderSummaryWithEmptyData = Template.bind({});
OrderSummaryWithEmptyData.args = {
  summary: ORDER_SUMMARY.emptyData,
};
OrderSummaryWithEmptyData.parameters = {
  docs: {
    description: {
      story:
        'The `Empty` story demonstrates the `OrderSummary` component with no order details, reflecting an empty cart.',
    },
  },
};
