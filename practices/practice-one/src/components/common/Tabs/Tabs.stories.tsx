// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { Tabs } from '@/components';

const meta = {
  title: 'Components/common/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'The `Tabs` component provides a way to navigate through multiple sections of content. Each tab displays a title, and its corresponding content is displayed when the tab is selected.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description:
        'An array of tab items, each containing a `title` and `content`.',
      control: { type: 'object' },
      defaultValue: [
        {
          title: 'Tab 1',
          content: <div>Content for Tab 1</div>,
        },
        {
          title: 'Tab 2',
          content: <div>Content for Tab 2</div>,
        },
        {
          title: 'Tab 3',
          content: <div>Content for Tab 3</div>,
        },
      ],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Tab 1',
        content: <div>Content for Tab 1</div>,
      },
      {
        title: 'Tab 2',
        content: <div>Content for Tab 2</div>,
      },
      {
        title: 'Tab 3',
        content: <div>Content for Tab 3</div>,
      },
    ],
    customClass: {
      wrapper: 'flex flex-col gap-y-6 w-full',
      header: 'flex justify-center gap-7 border-b-2 pb-2',
      button: 'p-3 text-sm font-medium outline-none transition-colors',
      activeButton: 'text-primary-400 border-primary-400',
      content: 'mt-4',
      activeContent:
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
      inactiveContent: 'hidden',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'A simple example of the `Tabs` component with three default items displaying plain text content.',
      },
    },
  },
};

export const WithCustomClasses: Story = {
  args: {
    items: [
      {
        title: 'Tab A',
        content: <div className="p-4">Customized Content for Tab A</div>,
      },
      {
        title: 'Tab B',
        content: <div className="p-4">Customized Content for Tab B</div>,
      },
    ],
    customClass: {
      wrapper: 'flex flex-col gap-y-8 w-3/4 mx-auto',
      header: 'flex justify-start gap-4 border-b-4 pb-2',
      button: 'p-2 text-base font-semibold transition-colors',
      activeButton: 'text-primary-400 border-primary-400',
      content: 'mt-6',
      activeContent: 'p-4 bg-gray-100 rounded shadow-md',
      inactiveContent: 'hidden',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'An example of the `Tabs` component with customized classes for styling.',
      },
    },
  },
};
