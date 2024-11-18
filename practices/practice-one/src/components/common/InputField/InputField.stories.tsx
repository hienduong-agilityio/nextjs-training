// Types
import type { Meta, StoryObj } from '@storybook/react';

// Component
import InputField from './index';

const meta = {
  title: 'Components/common/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: 'The placeholder text for the input field.',
      control: 'text',
    },
    name: {
      description: 'The name attribute of the input field.',
      control: 'text',
    },
    defaultValue: {
      description: 'The default value of the input field.',
      control: 'text',
    },
    type: {
      description: 'The type attribute of the input field.',
      control: 'text',
    },
    customClasses: {
      description: 'Custom CSS classes to apply to the input field.',
      control: 'text',
    },
    errorMessage: {
      description: 'Error message displayed below the input field.',
      control: 'text',
    },
    startContent: {
      description: 'Content to display at the start of the input field.',
      control: 'text',
    },
    endContent: {
      description: 'Content to display at the end of the input field.',
      control: 'text',
    },
    disabled: {
      description: 'Disables the input field if true.',
      control: 'boolean',
    },
    onChange: {
      description: 'Callback function triggered on input value change.',
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
    customClasses: 'h-10 border-primary-200',
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Default InputField with basic properties.',
      },
    },
  },
};

export const Primary: Story = {
  args: {
    placeholder: 'Enter your text',
    customClasses: 'text-primary placeholder-primary pl-5 h-10',
    type: 'text',
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary style InputField with custom placeholder and styling.',
      },
    },
  },
};

export const Disable: Story = {
  args: {
    placeholder: 'disable',
    disabled: true,
    customClasses: 'cursor-not-allowed h-10',
    onClick: () => {
      alert('Button component');
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled InputField that cannot be interacted with.',
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
        story: 'InputField with an error message displayed.',
      },
    },
  },
};

export const WithContent: Story = {
  args: {
    placeholder: 'Enter your text',
    customClasses: 'pl-5 pr-5 h-10',
    startContent: '🔍',
    endContent: '✔️',
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'InputField with start and end content/icons.',
      },
    },
  },
};
