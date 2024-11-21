// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { Tabs } from '@/components';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'A Tabs component that allows users to switch between multiple sections of content. Each tab displays a title and reveals the corresponding content when selected.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of tab items containing a title and content.',
      control: { type: 'object' },
      defaultValue: [],
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Default Tabs with three items displaying simple text content.',
      },
    },
  },
};

export const WithCustomContent: Story = {
  args: {
    items: [
      {
        title: 'Products',
        content: (
          <div className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">Product List</h2>
            <ul className="list-disc ml-6">
              <li>Product A</li>
              <li>Product B</li>
              <li>Product C</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Details',
        content: (
          <div className="p-4">
            <h2 className="text-lg font-semibold">Product Details</h2>
            <p className="text-sm text-gray-700">
              Detailed information about selected products.
            </p>
          </div>
        ),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tabs with customized content such as lists and styled sections.',
      },
    },
  },
};
