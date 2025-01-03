import type { Meta, StoryFn } from '@storybook/react';
import { ICartItem } from '@/interfaces';
import { CartTable } from '@/ui';

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

export const Default = Template.bind({});
Default.args = {
  products: [
    {
      id: '1',
      thumbnail: '/images/product-mock.png',
      quantity: 2,
      title: 'Sample Product',
      price: 29.99,
      total: 59.98,
    },
    {
      id: '2',
      thumbnail: '/images/product-mock.png',
      quantity: 1,
      title: 'Another Product',
      price: 49.99,
      total: 49.99,
    },
  ],
};
Default.parameters = {
  docs: {
    description: {
      story:
        'The `Default` story showcases the `CartTable` with a list of cart items, displaying all the table columns and item rows.',
    },
  },
};

export const Empty = Template.bind({});
Empty.args = {
  products: [],
};
Empty.parameters = {
  docs: {
    description: {
      story:
        'The `Empty` story demonstrates the `CartTable` component when no products are available in the cart. It displays the `EmptyCart` component.',
    },
  },
};
