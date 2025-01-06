// Types
import type { Meta, StoryObj } from '@storybook/react';

// Component
import { InputField } from '@/components';

const meta = {
  title: 'Components/common/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A `InputField` component supporting icons, error messages, and various styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: 'Placeholder text displayed in the input field.',
      control: 'text',
    },
    name: {
      description: 'Name attribute of the input field.',
      control: 'text',
    },
    defaultValue: {
      description: 'Default value of the input field.',
      control: 'text',
    },
    type: {
      description: 'Type attribute of the input field (e.g., text, number).',
      control: 'text',
    },
    customClass: {
      description: 'Custom CSS classes for the container and input styles.',
      control: 'object',
    },
    errorMessage: {
      description: 'Error message displayed below the input field.',
      control: 'text',
    },
    startIcon: {
      description: 'Icon or content displayed at the start of the input field.',
      control: 'text',
    },
    endIcon: {
      description: 'Icon or content displayed at the end of the input field.',
      control: 'text',
    },
    disabled: {
      description: 'Disables the input field if set to true.',
      control: 'boolean',
    },
    onChange: {
      description: 'Callback function triggered when the input value changes.',
      action: 'changed',
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text',
    name: 'test',
    defaultValue: '50',
    type: 'number',
    customClass: {
      input: 'h-10 border-primary-200',
    },
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic `InputField` with default settings.',
      },
    },
  },
};

export const Primary: Story = {
  args: {
    placeholder: 'Enter your text',
    customClass: {
      input: 'text-primary placeholder-primary pl-5 h-10',
    },
    type: 'text',
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'An `InputField` styled with primary colors and custom placeholders.',
      },
    },
  },
};

export const Disable: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
    customClass: {
      input: 'cursor-not-allowed h-10',
    },
    onClick: () => {
      alert('Button component');
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled `InputField` that cannot be interacted with.',
      },
    },
  },
};

export const ShowError: Story = {
  args: {
    placeholder: 'Enter your text',
    name: 'test',
    defaultValue: '',
    type: 'text',
    errorMessage: 'This field is required',
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'An `InputField` displaying an error message for invalid input.',
      },
    },
  },
};

export const WithContent: Story = {
  args: {
    placeholder: 'Enter your text',
    customClass: {
      input: 'px-5 h-10',
      container: 'border rounded-md',
    },
    startIcon: '🔍',
    endIcon: '✔️',
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'An `InputField` featuring start and end icons.',
      },
    },
  },
};
