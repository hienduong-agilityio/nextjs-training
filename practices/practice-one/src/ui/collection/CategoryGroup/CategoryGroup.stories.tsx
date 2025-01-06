// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { CategoryGroup } from '@/ui';

// Mocks
import { HOT_DEALS } from '@/mocks';

const meta = {
  title: 'UI/Collection/CategoryGroup',
  component: CategoryGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The `CategoryGroup` component allows filtering items by categories, displaying a title and a list of categories with their item counts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'The title of the category group.',
      control: 'text',
      defaultValue: 'Hot Deals',
    },
    items: {
      description: 'An array of category items with their names and counts.',
      control: 'object',
    },
  },
} satisfies Meta<typeof CategoryGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Hot Deals',
    items: HOT_DEALS,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default `CategoryGroup` displaying a title and a list of categories.',
      },
    },
  },
};

export const WithCustomStyles: Story = {
  args: {
    title: 'Top Categories',
    items: [
      { name: 'Books', count: 20 },
      { name: 'Furniture', count: 15 },
      { name: 'Toys', count: 10 },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          '`CategoryGroup` with custom styles for container, title, and category items.',
      },
    },
  },
};

export const EmptyCategories: Story = {
  args: {
    title: 'No Categories',
    items: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          '`CategoryGroup` displaying an empty state when no categories are available.',
      },
    },
  },
};
