import { Meta, StoryFn } from '@storybook/react';

// Components
import { ProductInfo } from '@/ui';

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
      description:
        'The average rating of the product (Primary). Value between 0 and 5.',
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
      description:
        'The original price of the product before discounts (Secondary).',
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
          'Displays detailed information about a product, including its name, rating, reviews, pricing, availability, category, and shipping information. Key properties such as `name`, `rating`, `price`, `discount`, and `availabilityStatus` are considered primary.',
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof ProductInfo> = (args) => (
  <ProductInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Default Product',
  rating: 4.5,
  reviews: [],
  price: 49.99,
  originalPrice: 59.99,
  discount: '20',
  availabilityStatus: 'In stock',
  category: 'beauty',
  shippingInformation: 'Ships in 1 month.',
};
Default.parameters = {
  docs: {
    description: {
      story:
        'Displays a product with default properties, showcasing primary details such as name, rating, price, discount, and availability.',
    },
  },
};

export const NoReviews = Template.bind({});
NoReviews.args = {
  name: 'New Product',
  rating: 0,
  reviews: [],
  price: 29.99,
  originalPrice: 39.99,
  discount: '25',
  availabilityStatus: 'Pre-order',
  category: 'beauty',
  shippingInformation: 'Ships in 2 months.',
};
NoReviews.parameters = {
  docs: {
    description: {
      story:
        'Represents a product with no reviews and pre-order availability. Primary details such as price and availability are highlighted.',
    },
  },
};
