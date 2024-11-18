// Types
import type { Meta, StoryObj } from '@storybook/react';

// Component
import { SearchBox } from '@/components';

const meta = {
  title: 'Components/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default SearchBox with a placeholder and a search button.',
      },
    },
  },
};
