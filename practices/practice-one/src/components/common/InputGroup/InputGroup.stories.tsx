import type { Meta, StoryObj } from '@storybook/react';

// Components
import { InputGroup } from '@/components';

// Icons
import { SearchIcon } from '@/icons';

const meta = {
  title: 'Components/Common/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A `InputField` and `Button` combination for search or form submissions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The current value of the input field.',
    },
    placeholder: {
      control: 'text',
      description: 'Text displayed when the input field is empty.',
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed inside the button.',
    },
    inputName: {
      control: 'text',
      description: 'The name attribute for the input field.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables both the input field and the button.',
    },
    customClass: {
      control: 'object',
      description: 'CSS classes for customizing the styling of the component.',
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback function triggered when the form is submitted.',
    },
  },
  args: {
    value: '',
    placeholder: 'Enter your query...',
    buttonText: 'Search',
    inputName: 'inputField',
    isDisabled: false,
    customClass: {
      container: '',
      inputContainer: '',
      input: '',
      button: '',
    },
    onSubmit: () => alert('Form submitted!'),
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter your query...',
    buttonText: 'Search',
    isDisabled: false,
  },
  render: (args) => <InputGroup {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The default `InputGroup` setup for basic search functionality.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    value: '',
    placeholder: 'Enter your query...',
    buttonText: 'Search',
    isDisabled: true,
  },
  render: (args) => <InputGroup {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'An `InputGroup` component in a disabled state, preventing interactions.',
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    value: '',
    placeholder: 'Custom placeholder...',
    buttonText: 'Go',
    customClass: {
      container: 'bg-gray-100 p-4',
      inputContainer: 'bg-white',
      input: 'text-blue-500',
      button: 'bg-blue-500 text-white hover:bg-blue-600',
    },
  },
  render: (args) => <InputGroup {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'An `InputGroup` component styled with custom CSS classes.',
      },
    },
  },
};

export const VoucherInput: Story = {
  args: {
    value: '',
    placeholder: 'Voucher code',
    startIcon: <SearchIcon color="#40BFFF" className="lg:hidden block" />,
    buttonText: 'Redeem',
    isDisabled: true,
    customClass: {
      container: 'flex h-14',
      inputContainer: 'border-2 border-secondary-100 rounded-r-none h-full',
      input: 'text-gray-700 appearance-none',
      button: 'px-7 rounded-l-none hidden lg:block shadow-none',
    },
  },
  render: (args) => <InputGroup {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'The `VoucherInput` component is built on top of the `InputGroup` component, designed for voucher code entry.',
      },
    },
  },
};
