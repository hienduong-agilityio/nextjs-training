// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { ProductCard } from '@/components';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        component:
          'A ProductCard component that displays product information, including image, name, price, discount, and ratings. Includes hover actions for adding to favorites or cart.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Unique identifier for the product.',
      control: 'text',
    },
    name: {
      description: 'Name of the product.',
      control: 'text',
    },
    images: {
      description: 'URL of the product image.',
      control: 'text',
    },
    price: {
      description: 'Price of the product.',
      control: 'number',
    },
    originalPrice: {
      description: 'Original price before discount.',
      control: 'number',
    },
    discount: {
      description: 'Discount information, e.g., percentage or amount.',
      control: 'text',
    },
    label: {
      description: 'Optional label to display, e.g., "Hot", "New".',
      control: 'text',
      defaultValue: 'Hot',
    },
    rating: {
      description: 'Star rating of the product.',
      control: { type: 'number', min: 0, max: 5 },
      defaultValue: 4,
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
    name: 'Sample Product',
    images: ['/images/product-mock.png'],
    price: '$29.99',
    originalPrice: '$39.99',
    discount: '25% OFF',
    label: 'Hot',
    rating: 4.5,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default ProductCard with a product image, name, price, discount, and rating.',
      },
    },
  },
};

export const WithCustomLabel: Story = {
  args: {
    id: '2',
    name: 'Special Edition Product',
    images: ['/images/product-mock.png'],
    price: '$49.99',
    originalPrice: '$59.99',
    discount: '20% OFF',
    label: 'Special',
    rating: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'ProductCard with a custom label "Special".',
      },
    },
  },
};

export const WithoutDiscount: Story = {
  args: {
    id: '3',
    name: 'Basic Product',
    images: ['/images/product-mock.png'],
    price: '$19.99',
    rating: 3.5,
  },
  parameters: {
    docs: {
      description: {
        story: 'ProductCard without a discount or label.',
      },
    },
  },
};

export const Minimal: Story = {
  args: {
    id: '4',
    name: 'Minimal Product',
    images: ['/images/product-mock.png'],
    price: '$10.00',
    rating: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal ProductCard with just name, price, and image.',
      },
    },
  },
};
