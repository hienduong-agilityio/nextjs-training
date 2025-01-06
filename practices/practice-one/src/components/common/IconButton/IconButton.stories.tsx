// Libraries
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// Enums
import { BUTTON_VARIANTS, BUTTON_COLORS } from '@/enums';

// Components
import { IconButton } from '@/components';

const meta = {
  title: 'Components/Common/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A `IconButton` component designed to display icons with various styles and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    customClass: {
      control: 'text',
      description: 'Custom CSS classes for additional styling.',
    },
    color: {
      control: 'inline-radio',
      options: [
        BUTTON_COLORS.DEFAULT,
        BUTTON_COLORS.PRIMARY,
        BUTTON_COLORS.SECONDARY,
        BUTTON_COLORS.SUCCESS,
        BUTTON_COLORS.WARNING,
        BUTTON_COLORS.DANGER,
      ],
      description: 'Defines the color of the IconButton.',
    },
    variant: {
      control: 'inline-radio',
      options: [
        BUTTON_VARIANTS.SOLID,
        BUTTON_VARIANTS.SHADOW,
        BUTTON_VARIANTS.LIGHT,
      ],
      description: 'Defines the visual style of the IconButton.',
    },
    onClick: {
      action: 'clicked',
      description: 'Function to execute when the IconButton is clicked.',
    },
    children: {
      control: 'text',
      description: 'Icon or content to be displayed inside the button.',
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: '🔍',
    customClass: '',
    variant: BUTTON_VARIANTS.SOLID,
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '🔍',
    customClass: '',
    variant: BUTTON_VARIANTS.SOLID,
  },
  render: (args) => <IconButton {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The default `IconButton` with minimal styling.',
      },
    },
  },
};

export const Variants: Story = {
  args: {
    children: '🔍',
    variant: BUTTON_VARIANTS.SOLID,
  },
  render: (args) => (
    <div className="flex gap-4 p-4">
      <IconButton {...args} customClass="bg-primary-500 text-white">
        🔍
      </IconButton>
      <IconButton {...args} customClass="bg-secondary-500 text-white">
        🚀
      </IconButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`IconButtons` with different colors and solid style.',
      },
    },
  },
};

export const Sizes: Story = {
  args: {
    children: '🔍',
    variant: BUTTON_VARIANTS.SOLID,
  },
  render: (args) => (
    <div className="flex gap-4 p-4">
      <IconButton {...args} customClass="w-8 h-8 text-sm">
        🔍
      </IconButton>
      <IconButton {...args} customClass="w-10 h-10 text-base">
        🚀
      </IconButton>
      <IconButton {...args} customClass="w-12 h-12 text-lg">
        ✔️
      </IconButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`IconButtons` styled in small, medium, and large sizes.',
      },
    },
  },
};
