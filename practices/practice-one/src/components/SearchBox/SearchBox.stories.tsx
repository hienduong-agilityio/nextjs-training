// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { SearchBox } from '@/components';

const meta = {
  title: 'Components/SearchBox',
  component: SearchBox,
  parameters: {
    docs: {
      description: {
        component:
          'A SearchBox component that includes an InputField and a Button for query input and submission.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: 'The placeholder text displayed inside the input field.',
      control: 'text',
    },
    buttonText: {
      description: 'The text displayed inside the button.',
      control: 'text',
      defaultValue: 'Search',
    },
    value: {
      description: 'The current value of the input field.',
      control: 'text',
    },
    onChange: {
      description: 'Callback function triggered when the input value changes.',
      action: 'onChange',
    },
    onSearch: {
      description:
        'Callback function triggered when the search button is clicked. Receives the input value as an argument.',
      action: 'onSearch',
    },
    customClass: {
      description: 'Custom classes for styling the SearchBox component.',
      control: 'object',
    },
  },
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your query...',
    buttonText: 'Search',
    customClass: {
      inputContainer: 'border-gray-300',
      input: 'h-10 border-primary-200',
      button: 'bg-primary-300 text-white',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Default SearchBox with basic properties.',
      },
    },
  },
};

export const WithCustomStyles: Story = {
  args: {
    placeholder: 'Search for products...',
    buttonText: 'Go',
    customClass: {
      inputContainer: 'border-green-500',
      input: 'text-green-700',
      button: 'bg-green-500 text-white',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'SearchBox with custom styles for container, input, and button.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Search is disabled',
    buttonText: 'Disabled',
    customClass: {
      inputContainer: 'border-gray-400',
      input: 'h-10 border-primary-300 cursor-not-allowed',
      button: 'bg-primary-300 text-white cursor-not-allowed',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'SearchBox in a disabled state.',
      },
    },
  },
};
