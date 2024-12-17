// Libraries
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Header } from '@/layouts';

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Header` component as the `<header/>` element for the e-comm. It includes a logo, a search box, profile, and cart icons. The `cartItemCount` prop displays the number of items in the cart.',
      },
    },
  },
  argTypes: {
    cartItemCount: {
      description: 'Number of items in the cart.',
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default Header with no cart item count.',
      },
    },
  },
};

export const WithCartItemCount: Story = {
  args: {
    cartItemCount: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with cart item count number',
      },
    },
  },
};
