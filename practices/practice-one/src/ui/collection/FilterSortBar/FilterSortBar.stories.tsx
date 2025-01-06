// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { FilterSortBar } from '@/ui';

// Constants
import { SORT_PRODUCT_OPTIONS } from '@/constants';

const meta = {
  title: 'UI/Collection/FilterSortBar',
  component: FilterSortBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `FilterSortBar` component provides a bar for filtering and sorting items. It displays the total item count and dropdowns for sorting and limiting the number of displayed items.',
      },
    },
  },
  render: (args) => (
    <div className="w-[20svw]">
      <FilterSortBar {...args} />
    </div>
  ),
  argTypes: {
    itemCount: {
      description: 'The total number of items to display.',
      control: 'number',
      defaultValue: 50,
    },
    sortOptions: {
      description: 'An array of sorting options.',
      defaultValue: SORT_PRODUCT_OPTIONS,
    },
    showOptions: {
      description: 'An array of options for the number of items to show.',
      defaultValue: ['6', '12', '24'],
    },
  },
} satisfies Meta<typeof FilterSortBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemCount: 100,
    sortOptions: SORT_PRODUCT_OPTIONS,
    showOptions: ['6', '12', '24'],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default `FilterSortBar` displaying item count and dropdowns for sorting and limiting items.',
      },
    },
  },
};

export const CustomOptions: Story = {
  args: {
    itemCount: 75,
    sortOptions: ['Low to High', 'High to Low', 'New Arrivals'],
    showOptions: ['5', '10', '20'],
  },
  parameters: {
    docs: {
      description: {
        story: '`FilterSortBar` with custom sorting options and show options.',
      },
    },
  },
};
