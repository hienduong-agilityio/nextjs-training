// Libraries
import { Meta, StoryFn } from '@storybook/react';

// Components
import { SearchModal } from '@/components';

export default {
  title: 'Components/SearchModal',
  component: SearchModal,
  parameters: {
    docs: {
      description: {
        component:
          'The `SearchModal` component provides a responsive search interface for mobile devices. It includes a modal with a `SearchBox` component and handles open/close states with animations. This story is pre-configured to render only on tablet screen sizes.',
      },
    },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
} as Meta;

const Template: StoryFn<typeof SearchModal> = () => (
  <div className="relative h-[200px]">
    <SearchModal />
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story:
        'The default state of the `SearchModal`, rendered on a tablet screen size.',
    },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
