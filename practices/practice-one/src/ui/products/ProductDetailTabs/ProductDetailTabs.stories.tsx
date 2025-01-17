import { Meta, StoryObj } from '@storybook/react';

// Components
import { ProductDetailTabs } from '@/ui';

// Mocks
import { PRODUCT_REVIEW } from '@/mocks';

// Mock Data
const MOCK_DESCRIPTION = `This is a detailed description of the product. It provides all the necessary information a customer might need before making a purchase.`;

// Meta Configuration
const ProductDetailTabsMeta = {
  title: 'UI/Products/ProductDetailTabs',
  component: ProductDetailTabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`ProductDetailTabs` manages tabbed navigation for product details, allowing users to toggle between product information and reviews.',
      },
    },
  },
} satisfies Meta<typeof ProductDetailTabs>;

export default ProductDetailTabsMeta;

type Story = StoryObj<typeof ProductDetailTabs>;

export const ProductInformationTab: Story = {
  args: {
    description: MOCK_DESCRIPTION,
    reviews: PRODUCT_REVIEW,
  },

  parameters: {
    docs: {
      description: {
        story:
          'Displays the "Product Information" tab by default, showing the product description without any reviews.',
      },
    },
  },
};
