import { Meta, StoryFn } from '@storybook/react';

// Components
import { ProductInfo } from '@/ui';

// Mocks
import { PRODUCTS_DATA } from '@/mocks';

export default {
  title: 'UI/Products/ProductInfo',
  component: ProductInfo,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'The name of the product (Primary).',
      control: { type: 'text' },
      table: { category: 'Primary' },
    },
    rating: {
      description: 'The average rating of the product (Primary).',
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      table: { category: 'Primary' },
    },
    reviews: {
      description: 'An array of reviews for the product (Secondary).',
      control: { type: 'object' },
      table: { category: 'Primary' },
    },
    price: {
      description: 'The current price of the product (Primary).',
      control: { type: 'number' },
      table: { category: 'Primary' },
    },
    originalPrice: {
      description: 'The original price of the product (Secondary).',
      control: { type: 'number' },
      table: { category: 'Primary' },
    },
    discount: {
      description: 'The discount percentage applied to the product (Primary).',
      control: { type: 'text' },
      table: { category: 'Primary' },
    },
    availabilityStatus: {
      description:
        'The availability status of the product (Primary). Examples: "In stock", "Out of stock".',
      control: { type: 'text' },
      table: { category: 'Primary' },
    },
    category: {
      description: 'The category of the product (Secondary).',
      control: { type: 'text' },
      table: { category: 'Primary' },
    },
    shippingInformation: {
      description:
        'Details about the shipping information for the product (Secondary).',
      control: { type: 'text' },
      table: { category: 'Primary' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Displays detailed information about a product, including its name, rating, pricing, availability, and category.',
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof ProductInfo> = (args) => (
  <ProductInfo {...args} />
);

export const Sneakers = Template.bind({});
Sneakers.args = {
  ...PRODUCTS_DATA[0],
  shippingInformation: 'Ships in 1 months.',
};
Sneakers.parameters = {
  docs: {
    description: {
      story:
        'Displays information about the "Sneakers" product from `PRODUCTS_DATA`.',
    },
  },
};

export const LeatherBag = Template.bind({});
LeatherBag.args = {
  ...PRODUCTS_DATA[1],
  shippingInformation: 'Ships in 2 months.',
};
LeatherBag.parameters = {
  docs: {
    description: {
      story: 'Displays information about the "Leather Shoulder Bag" product.',
    },
  },
};
