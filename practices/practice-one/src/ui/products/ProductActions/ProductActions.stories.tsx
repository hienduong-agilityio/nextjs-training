// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { ProductActions } from '@/ui';

const ProductActionsMeta = {
  title: 'UI/Products/ProductActions',
  component: ProductActions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`ProductActions` component combines quantity control and cart/favorite actions for products. Ideal for e-commerce use cases.',
      },
    },
  },
} satisfies Meta;

export default ProductActionsMeta;

type Story = StoryObj<typeof ProductActions>;

export const Default: Story = {
  args: {
    productId: 'product-123',
  },
  render: (args) => (
    <div className="w-[25svw]">
      <ProductActions {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Default `ProductActions` component demonstrating quantity control and cart/favorite actions.',
      },
    },
  },
};
