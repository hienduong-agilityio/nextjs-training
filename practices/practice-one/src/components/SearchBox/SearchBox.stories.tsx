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
          'A `SearchBox` component that includes an `InputField` and a `Button` for query input and submission.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: 'The placeholder text displayed inside the input field.',
      control: 'text',
    },
    customClass: {
      description: 'Custom classes for styling the `SearchBox` component.',
      control: 'object',
    },
  },
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your query...',
    customClass: {
      inputContainer: 'border-gray-300',
      input: 'h-10 border-primary-200',
      button: 'bg-primary-300 text-white',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Default `SearchBox` with basic properties.',
      },
    },
  },
};
