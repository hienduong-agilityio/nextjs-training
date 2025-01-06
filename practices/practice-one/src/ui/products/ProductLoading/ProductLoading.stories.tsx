// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import {
  LoadingProductCard,
  LoadingProductTabs,
  LoadingRelatedProducts,
} from '@/ui';

const LoadingComponents = {
  title: 'UI/Products/ProductLoading',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `ProductLoading` skeleton loaders for the Product UI, simulating loading states for smoother user experience during data fetching.',
      },
    },
  },
} satisfies Meta;

export default LoadingComponents;

type StoryLoading = StoryObj<Meta>;

export const DefaultLoadingProductCard: StoryLoading = {
  render: () => (
    <div className="w-[15svw]">
      <LoadingProductCard />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Default `LoadingProductCard` skeleton displaying placeholder elements for a product card with an image, hover buttons, and product details.',
      },
    },
  },
};

export const DefaultLoadingProductTabs: StoryLoading = {
  render: () => (
    <div className="w-[25svw]">
      <LoadingProductTabs />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Default `LoadingProductTabs` skeleton displaying placeholder elements for a product tabs section with tab headers and content.',
      },
    },
  },
};

export const DefaultLoadingRelatedProducts: StoryLoading = {
  render: () => (
    <div className="w-[65svw]">
      <LoadingRelatedProducts />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Default `LoadingRelatedProducts` skeleton displaying a grid of loading product cards for related products.',
      },
    },
  },
};
