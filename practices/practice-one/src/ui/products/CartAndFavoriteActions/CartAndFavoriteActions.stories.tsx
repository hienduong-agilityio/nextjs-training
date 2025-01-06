// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { CartAndFavoriteActions } from '@/ui';
import Image from 'next/image';

// Mock Data and Actions
const mockAddToFavorites = () => alert('Added to favorites!');
const mockImage = '/images/product-mock.png';
const mockProductId = 'mock-product-id';

// Story Meta
const meta: Meta<typeof CartAndFavoriteActions> = {
  title: 'UI/Products/CartAndFavoriteActions',
  component: CartAndFavoriteActions,
  tags: ['autodocs'],
  args: {
    productId: mockProductId,
    quantity: 1,
    variant: 'default',
    addToFavorites: mockAddToFavorites,
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `CartAndFavoriteActions` component provides actions for adding products to the cart and marking them as favorites. It supports two variants: a default button style and a compact card style.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CartAndFavoriteActions>;

// Default Variant Story
export const Default: Story = {
  args: {
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default layout with buttons for adding products to the cart and marking them as favorites.',
      },
    },
  },
};

// Card Variant Story
export const CardVariant: Story = {
  args: {
    variant: 'card',
  },
  render: (args) => (
    <div className="relative bg-secondary-200 group w-[300px] mx-auto">
      <Image
        src={mockImage}
        alt={'mockName'}
        width={0}
        height={0}
        className="mix-blend-multiply object-contain h-[273px] w-[200px] sm:w-[300px] sm:h-[273px] mx-auto"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Hover Buttons */}
      <CartAndFavoriteActions {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Compact card layout with an image and floating action buttons for adding to the cart and marking as favorite. Hover to see the buttons.',
      },
    },
  },
};
