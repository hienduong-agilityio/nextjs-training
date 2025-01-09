import type { Meta, StoryFn } from '@storybook/react';

// Interfaces
import type { ICartItem } from '@/interfaces';

// UI
import { CartTable } from '@/ui';

// Mocks
import { CART_DATA } from '@/mocks';

export default {
  title: 'UI/Cart/CartTable',
  component: CartTable,
  parameters: {
    docs: {
      description: {
        component:
          'The `CartTable` component displays a table of cart items with columns for product details, price, quantity, and unit price. It also handles an empty cart state using the `EmptyCart` component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    products: {
      description: 'Array of cart items to display in the table.',
      control: { type: 'object' },
      table: { category: 'Primary' },
    },
  },
} as Meta;

// Default Template
const Template: StoryFn<{ products: ICartItem[] }> = (args) => (
  <CartTable {...args} />
);

export const CartTableWithData = Template.bind({});
CartTableWithData.args = {
  products: CART_DATA,
};
CartTableWithData.parameters = {
  docs: {
    description: {
      story:
        'The `Default` story showcases the `CartTable` with a list of cart items, displaying all the table columns and item rows.',
    },
  },
};

export const CartTableWithEmptyData = Template.bind({});
CartTableWithEmptyData.args = {
  products: [],
};
CartTableWithEmptyData.parameters = {
  docs: {
    description: {
      story:
        'The `Empty` story demonstrates the `CartTable` component when no products are available in the cart. It displays the `EmptyCart` component.',
    },
  },
};
