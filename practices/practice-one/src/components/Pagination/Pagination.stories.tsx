import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@/components';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A `Pagination` component for navigating through pages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages available for pagination.',
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'The current active page. Defaults to the first page.',
    },
  },
  args: {
    totalPages: 5,
    currentPage: 1,
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalPages: 5,
    currentPage: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default `Pagination` with 5 pages, starting at the first page.',
      },
    },
  },
};

export const WithCustomCurrentPage: Story = {
  args: {
    totalPages: 10,
    currentPage: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays `Pagination` with 10 pages, starting at the 4th page.',
      },
    },
  },
};

export const EdgeCaseSinglePage: Story = {
  args: {
    totalPages: 1,
    currentPage: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Handles the edge case where only a single page is available.',
      },
    },
  },
};
