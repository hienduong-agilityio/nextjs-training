import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ProductTabs } from '@/components';

// Mocks
import { PRODUCTS_DATA } from '@/mocks';

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
    productData: PRODUCTS_DATA,
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
