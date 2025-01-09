import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ProductCard } from '@/components';

// Mocks
import { PRODUCTS_DATA } from '@/mocks';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `ProductCard` component displays product details such as image, name, price, discount, and ratings. It also includes actions for adding to the cart or favorites.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the product.',
      table: { category: 'Primary' },
    },
    name: {
      control: 'text',
      description: 'Name of the product displayed on the card.',
      table: { category: 'Primary' },
    },
    images: {
      description:
        'Array of image URLs representing the product. The first image is displayed.',
      table: { category: 'Primary' },
    },
    price: {
      control: 'number',
      description: 'Current price of the product.',
      table: { category: 'Primary' },
    },
    originalPrice: {
      control: 'number',
      description: 'Original price of the product before discounts.',
      table: { category: 'Primary' },
    },
    discount: {
      control: 'text',
      description: 'Discount percentage applied to the product.',
      table: { category: 'Primary' },
    },
    rating: {
      control: 'number',
      description: 'Average user rating for the product, out of 5.',
      table: { category: 'Primary' },
    },
    label: {
      control: 'text',
      description: 'Special label for the product, such as "Hot" or "New".',
      table: { category: 'Primary' },
    },
    shippingInformation: {
      control: 'text',
      description: 'Details about shipping, e.g., estimated delivery time.',
      table: { category: 'Secondary' },
    },
    description: {
      control: 'text',
      description: 'A brief description of the product.',
      table: { category: 'Secondary' },
    },
    availabilityStatus: {
      control: 'text',
      description:
        'Indicates stock availability (e.g., in stock, out of stock, pre-order).',
      table: { category: 'Secondary' },
    },
    reviews: {
      description: 'Array of user reviews for the product.',
      table: { category: 'Secondary' },
    },
    category: {
      control: 'text',
      description: 'Category to which the product belongs.',
      table: { category: 'Secondary' },
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...PRODUCTS_DATA[0],
    images: [],
    name: 'Default Product',
    rating: 0,
    price: 0,
    originalPrice: 0,
    discount: '0',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `Default` story demonstrates the `ProductCard` with minimal required fields populated. It highlights fallback UI for missing data.',
      },
    },
  },
};

export const FullDetails: Story = {
  args: PRODUCTS_DATA[2],
  parameters: {
    docs: {
      description: {
        story: 'A `ProductCard` showcasing a product with complete details.',
      },
    },
  },
};
