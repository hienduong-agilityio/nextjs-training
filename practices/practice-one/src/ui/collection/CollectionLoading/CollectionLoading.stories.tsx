// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { LoadingCategoryGroup, LoadingFilterSortBar } from '@/ui';

const LoadingComponents = {
  title: 'UI/Collection/CollectionLoading',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `CollectionLoading` skeleton loaders for the Collection UI, simulating loading states for smoother user experience during data fetching.',
      },
    },
  },
} satisfies Meta;

export default LoadingComponents;

type StoryLoading = StoryObj<Meta>;

export const DefaultLoadingCategoryGroup: StoryLoading = {
  render: () => (
    <div className="w-[10svw]">
      <LoadingCategoryGroup />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Default `LoadingCategoryGroup` skeleton displaying placeholder elements for the title and list of categories.',
      },
    },
  },
};

export const DefaultLoadingFilterSortBar: StoryLoading = {
  render: () => (
    <div className="w-[20svw]">
      <LoadingFilterSortBar />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Default `LoadingFilterSortBar` skeleton displaying placeholder elements for filter and sort options.',
      },
    },
  },
};
