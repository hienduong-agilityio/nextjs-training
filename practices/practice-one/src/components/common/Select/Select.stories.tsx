import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Select } from '@/components';

const meta = {
  title: 'Components/Common/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A `Select` dropdown component for selecting options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'An array of options displayed in the dropdown.',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected option.',
    },
    customClass: {
      control: 'text',
      description: 'CSS classes for custom styling.',
    },
    onChange: {
      action: 'changed',
      description: 'Function triggered when the selected option changes.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the dropdown when set to true.',
    },
  },
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultValue: 'Option 1',
    customClass: '',
    disabled: false,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultValue: 'Option 1',
  },
  render: (args) => <Select {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The default `Select` component with a basic set of options.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultValue: 'Option 1',
    disabled: true,
  },
  render: (args) => <Select {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'A `Select` component in a disabled state, preventing interaction.',
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    options: ['Red', 'Blue', 'Green'],
    defaultValue: 'Red',
    customClass: 'border-red-500 text-red-600 hover:border-red-700',
  },
  render: (args) => <Select {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'A `Select` component styled with custom CSS classes.',
      },
    },
  },
};
