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
        component: 'A `Tab` component for navigation and content switching.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'An array of tabs, each with a title, link, and content.',
      control: { type: 'object' },
      table: {
        type: {
          summary:
            'Array<{ title: string; href: string; content: React.ReactNode }>',
        },
      },
    },
    customClass: {
      description: 'CSS class names for customizing component styles.',
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
          'The default `Tabs` component with static tab items and content.',
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
          'The `Tabs` component with dynamically generated tab items and content.',
      },
    },
  },
};
