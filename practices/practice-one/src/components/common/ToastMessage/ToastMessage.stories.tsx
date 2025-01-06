import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { STATUS_TYPES } from '@/constants';

// Components
import { Toast } from '@/components';

const meta = {
  title: 'Components/Common/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A notification component for displaying success or error messages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Message or content displayed inside the Toast.',
    },
    type: {
      control: 'select',
      options: [STATUS_TYPES.SUCCESS, STATUS_TYPES.ERROR],
      description: 'Specifies the visual style and type of the Toast.',
    },
    timeoutDuration: {
      control: 'number',
      description:
        'Time (in milliseconds) before the Toast automatically closes.',
    },
    onClose: {
      action: 'closed',
      description: 'Function triggered when the Toast is dismissed.',
    },
  },
  args: {
    children: 'This is a toast message.',
    type: STATUS_TYPES.SUCCESS,
    timeoutDuration: 5000,
    onClose: () => console.log('Toast closed'),
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a success toast message.',
    type: STATUS_TYPES.SUCCESS,
  },
  render: (args) => <Toast {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The default `Toast` with a success status and a message.',
      },
    },
  },
};

export const ErrorToast: Story = {
  args: {
    children: 'This is an error toast message.',
    type: STATUS_TYPES.ERROR,
  },
  render: (args) => <Toast {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'A `Toast` with an error status to indicate issues or failures.',
      },
    },
  },
};

export const CustomTimeout: Story = {
  args: {
    children: 'This toast will close in 2 seconds.',
    type: STATUS_TYPES.SUCCESS,
    timeoutDuration: 2000,
  },
  render: (args) => <Toast {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'A `Toast` that automatically closes after 2 seconds.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    children: 'Click me to see the action.',
    type: STATUS_TYPES.SUCCESS,
    timeoutDuration: 0,
    onClose: () => alert('Toast closed manually!'),
  },
  render: (args) => <Toast {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'An interactive `Toast` that requires manual dismissal.',
      },
    },
  },
};
