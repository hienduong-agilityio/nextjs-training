import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ProductTabs } from '@/components';

const meta = {
  title: 'Components/ProductTabs',
  component: ProductTabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `ProductTabs` component dynamically displays products grouped by categories in a tabbed interface. It features a responsive layout and customizable tabs.',
      },
    },
  },
  argTypes: {
    category: {
      control: 'text',
      description: 'The currently selected category. Defaults to "All".',
      table: { category: 'Primary' },
    },
    productData: {
      control: 'object',
      description: 'Array of product data to be displayed within the tabs.',
      table: { category: 'Primary' },
    },
  },
} satisfies Meta<typeof ProductTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: 'All',
    productData: [
      {
        id: '1',
        name: 'Product 1',
        images: ['/images/product-mock.png'],
        price: 100,
        originalPrice: 120,
        category: 'beauty',
      },
      {
        id: '2',
        name: 'Product 2',
        images: ['/images/product-mock.png'],
        price: 80,
        originalPrice: 100,
        category: 'fragrances',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default view of the `ProductTabs` component, showing products from all categories.',
      },
    },
  },
};
