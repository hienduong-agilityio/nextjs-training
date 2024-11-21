// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { ProductTabs } from '@/components';

const meta = {
  title: 'Components/ProductTabs',
  component: ProductTabs,
  parameters: {
    docs: {
      description: {
        component:
          'The `ProductTabs` component interface for product categories section.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'The `ProductTabs` component showcases categorized products using `Tabs` components.',
      },
    },
  },
};
