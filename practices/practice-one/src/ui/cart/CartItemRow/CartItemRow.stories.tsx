// Libraries
import { Meta, StoryFn } from '@storybook/react';

// Types
import type { ICartItem } from '@/interfaces';

// UI
import { CartItemRow } from '@/ui';

// Mocks
import { CART_DATA } from '@/mocks';

export default {
  title: 'UI/Cart/CartItemRow',
  component: CartItemRow,
  parameters: {
    docs: {
      description: {
        component:
          'The `CartItemRow` component represents a single row in a shopping cart table, displaying the product image, title, price, quantity control, and total cost. It supports features like removing items and adjusting quantities.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Unique identifier for the cart item.',
      control: 'text',
      table: { category: 'Primary' },
    },
    thumbnail: {
      description: 'URL for the product thumbnail image.',
      control: 'text',
      table: { category: 'Primary' },
    },
    quantity: {
      description: 'Initial quantity of the product.',
      control: { type: 'number' },
      table: { category: 'Primary' },
    },
    title: {
      description: 'Title of the product.',
      control: 'text',
      table: { category: 'Primary' },
    },
    price: {
      description: 'Price of a single unit of the product.',
      control: { type: 'number', min: 0, step: 0.01 },
      table: { category: 'Primary' },
    },
  },
} as Meta;

const Template: StoryFn<ICartItem> = (args) => <CartItemRow {...args} />;

export const CartItemWithData = Template.bind({});
CartItemWithData.args = CART_DATA[0];
CartItemWithData.parameters = {
  docs: {
    description: {
      story:
        'The `Default` story demonstrates a standard `CartItemRow` with typical product details and quantity controls.',
    },
  },
};

export const CartItemRowWithEmptyData = Template.bind({});
CartItemRowWithEmptyData.args = {
  id: '',
  title: '',
  price: 0,
  quantity: 0,
  thumbnail: '',
};
CartItemRowWithEmptyData.parameters = {
  docs: {
    description: {
      story:
        'An example of a `CartItemRow` for a product with no data provided.',
    },
  },
};
