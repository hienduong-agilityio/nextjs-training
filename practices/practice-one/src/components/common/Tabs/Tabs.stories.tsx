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
          'The `Tabs` component provides a user-friendly way to navigate through multiple sections of content. Each tab displays a title, and its corresponding content is displayed when the tab is active. Highly customizable via class names.',
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
      table: {
        type: {
          summary: 'Array<{ title: string; content: React.ReactNode }>',
        },
      },
    },
    customClass: {
      description:
        'Object containing custom class names to style various parts of the component.',
      control: { type: 'object' },
      defaultValue: {
        wrapper: 'flex flex-col gap-y-6 w-full',
        header: 'flex justify-center gap-7 border-b-2 pb-2',
        button: 'p-3 text-sm font-medium outline-none',
        activeButton: 'text-primary-400 border-primary-400',
        content: 'mt-4',
        activeContent:
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
        inactiveContent: 'hidden',
      },
      table: {
        type: {
          summary: 'Object',
          detail: `{
          wrapper?: string;
          header?: string;
          button?: string;
          activeButton?: string;
          content?: string;
          activeContent?: string;
          inactiveContent?: string;
}`,
        },
      },
    },
    selectedTab: {
      description: 'The currently selected tab.',
      control: { type: 'text' },
      defaultValue: 'Tab 1',
      table: {
        type: { summary: 'string' },
      },
    },
    onTabChange: {
      description: 'Callback function invoked when a tab is selected.',
      action: 'tabChanged',
      table: {
        type: { summary: '(selectedTab: string) => void' },
      },
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
    selectedTab: 'Tab 1',
    customClass: {
      wrapper: 'flex flex-col gap-y-6 w-full',
      header: 'flex justify-center gap-7 border-b-2 pb-2',
      button: 'p-3 text-sm font-medium outline-none transition-colors',
      activeButton: 'text-primary-400 border-primary-400 border-b-2',
      content: 'mt-4',
      activeContent:
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
      inactiveContent: 'hidden',
    },
    onTabChange: (selectedTab: string) => {
      console.log(`Tab changed to: ${selectedTab}`);
    }, // Example function
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates the `Tabs` component with three default tabs, each containing simple text content.',
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
    selectedTab: 'Tab A',
    customClass: {
      wrapper: 'flex flex-col gap-y-8 w-3/4 mx-auto',
      header: 'flex justify-start gap-4 border-b-4 pb-2',
      button: 'p-2 text-base font-semibold transition-colors',
      activeButton: 'text-primary-400 border-primary-400 border-b-2',
      content: 'mt-6',
      activeContent: 'p-4 bg-gray-100 rounded shadow-md',
      inactiveContent: 'hidden',
    },
    onTabChange: (selectedTab: string) => {
      console.log(`Tab changed to: ${selectedTab}`);
    }, // Example function
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates a customized `Tabs` component with styled classes for a unique layout.',
      },
    },
  },
};

export const WithDynamicContent: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, i) => ({
      title: `Dynamic Tab ${i + 1}`,
      content: <div>Content for Dynamic Tab {i + 1}</div>,
    })),
    selectedTab: 'Dynamic Tab 1',
    customClass: {
      wrapper: 'flex flex-col gap-y-6 w-full',
      header: 'flex justify-center gap-4 border-b-2 pb-2',
      button: 'p-3 text-sm font-medium outline-none',
      activeButton: 'text-blue-500 border-blue-500',
      content: 'mt-4',
      activeContent: 'p-4 bg-gray-50 rounded shadow-sm',
      inactiveContent: 'hidden',
    },
    onTabChange: (selectedTab: string) => {
      console.log(`Tab changed to: ${selectedTab}`);
    }, // Example function
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the `Tabs` component with dynamically generated tab items and corresponding content.',
      },
    },
  },
};
