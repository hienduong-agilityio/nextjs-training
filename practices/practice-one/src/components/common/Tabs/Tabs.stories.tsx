// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { Tabs } from '@/components';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Common/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'The `Tabs` component offers a user-friendly navigation mechanism between different content sections. Each tab links to an `href`, and its content is displayed when the tab is active. Customizable via class names for styling flexibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description:
        'An array of tab items, each with a `title`, `href`, and corresponding `content`.',
      control: { type: 'object' },
      table: {
        type: {
          summary:
            'Array<{ title: string; href: string; content: React.ReactNode }>',
        },
      },
    },
    customClass: {
      description:
        'An object of class names to style different parts of the component.',
      control: { type: 'object' },
      table: {
        type: {
          summary: 'Object',
          detail: `{
            wrapper?: string;
            header?: string;
            link?: string;
            activeLink?: string;
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
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Tab 1', href: '/tab1', content: <div>Content for Tab 1</div> },
      { title: 'Tab 2', href: '/tab2', content: <div>Content for Tab 2</div> },
      { title: 'Tab 3', href: '/tab3', content: <div>Content for Tab 3</div> },
    ],
    selectedTab: 'Tab 1',
    customClass: {
      wrapper: 'flex flex-col gap-y-6 w-full',
      header: 'flex justify-center gap-7 border-b-2 pb-2',
      link: 'p-3 text-sm font-medium outline-none transition-colors',
      activeLink: 'text-primary-400 border-primary-400 border-b-2',
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
          'This default example demonstrates the `Tabs` component with three tabs, each containing static content.',
      },
    },
  },
};

export const WithCustomClasses: Story = {
  args: {
    items: [
      {
        title: 'Custom Tab A',
        href: '/customA',
        content: <div className="p-4">Customized Content for Tab A</div>,
      },
      {
        title: 'Custom Tab B',
        href: '/customB',
        content: <div className="p-4">Customized Content for Tab B</div>,
      },
    ],
    selectedTab: 'Custom Tab A',
    customClass: {
      wrapper: 'flex flex-col gap-y-8 w-3/4 mx-auto',
      header: 'flex justify-start gap-4 border-b-4 pb-2',
      link: 'p-2 text-base font-semibold transition-colors',
      activeLink: 'text-primary-400 border-primary-400 border-b-2',
      content: 'mt-6',
      activeContent: 'p-4 bg-gray-100 rounded shadow-md',
      inactiveContent: 'hidden',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates the `Tabs` component with a customized layout using unique class names.',
      },
    },
  },
};

export const WithDynamicContent: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, i) => ({
      title: `Dynamic Tab ${i + 1}`,
      href: `/dynamicTab${i + 1}`,
      content: <div>Dynamic content for Tab {i + 1}</div>,
    })),
    selectedTab: 'Dynamic Tab 1',
    customClass: {
      wrapper: 'flex flex-col gap-y-6 w-full',
      header: 'flex justify-center gap-4 border-b-2 pb-2',
      link: 'p-3 text-sm font-medium outline-none',
      activeLink: 'text-blue-500 border-blue-500',
      content: 'mt-4',
      activeContent: 'p-4 bg-gray-50 rounded shadow-sm',
      inactiveContent: 'hidden',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example showcases the `Tabs` component with dynamically generated tabs and corresponding content.',
      },
    },
  },
};
