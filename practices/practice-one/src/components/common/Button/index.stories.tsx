import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// Components
import Button from '.';

// Enums
import { BUTTON_VARIANTS, BUTTON_COLORS } from '@/enums';

const meta = {
  title: 'Components/Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Disables the button when set to `true`.',
    },
    variant: {
      control: 'inline-radio',
      options: [
        BUTTON_VARIANTS.SOLID,
        BUTTON_VARIANTS.SHADOW,
        BUTTON_VARIANTS.LIGHT,
      ],
      description: 'Defines the visual style of the button.',
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
      description: 'Defines the color of the button.',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function triggered when the button is clicked.',
    },
    children: {
      control: 'text',
      description: 'Content displayed inside the button.',
    },
    startIcon: {
      control: 'text',
      description: 'Optional icon displayed at the start of the button.',
    },
    type: {
      control: 'text',
      type: 'string',
      description: 'Select button type.',
    },
    endIcon: {
      control: 'text',
      description: 'Optional icon displayed at the end of the button.',
    },
    customClass: {
      control: 'text',
      description: 'Additional custom CSS classes for the button.',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: BUTTON_VARIANTS.SOLID,
    color: BUTTON_COLORS.DEFAULT,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is the default button with solid variant and default color.',
      },
    },
  },
};

export const Icon: Story = {
  args: {
    children: '🔍',
    variant: BUTTON_VARIANTS.SOLID,
    customClass: 'p-2',
  },
  render: () => (
    <div className="flex gap-5">
      <Button startIcon="🔍" variant={BUTTON_VARIANTS.SOLID} customClass="p-2">
        Search
      </Button>
      <Button endIcon="🚀" variant={BUTTON_VARIANTS.SOLID} customClass="p-2">
        Launch
      </Button>
      <Button
        startIcon="✔️"
        endIcon="➡️"
        variant={BUTTON_VARIANTS.SOLID}
        customClass="p-2"
      >
        Confirm
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'An icon button with solid style.',
      },
    },
  },
};

export const Sizes: Story = {
  args: {
    children: 'Large Button',
    customClass: 'text-lg p-4',
    variant: BUTTON_VARIANTS.SOLID,
    color: BUTTON_COLORS.DANGER,
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Button customClass="text-sm p-2">Small Button</Button>
      <Button customClass="text-base p-3">Medium Button</Button>
      <Button customClass="text-lg p-4">Large Button</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A button with custom size styles and danger color.',
      },
    },
  },
};

export const SolidVariantColors: Story = {
  args: {
    children: '',
    variant: BUTTON_VARIANTS.SOLID,
  },

  render: () => (
    <div className="flex gap-5">
      <Button color={BUTTON_COLORS.PRIMARY}>Primary</Button>
      <Button color={BUTTON_COLORS.SECONDARY}>Secondary</Button>
      <Button color={BUTTON_COLORS.SUCCESS}>Success</Button>
      <Button color={BUTTON_COLORS.WARNING}>Warning</Button>
      <Button color={BUTTON_COLORS.DANGER}>Danger</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays buttons with solid variant across different colors.',
      },
    },
  },
};

export const ShadowVariantColors: Story = {
  args: {
    children: '',
    variant: BUTTON_VARIANTS.SHADOW,
  },
  render: (args) => (
    <div className="flex gap-5">
      <Button {...args} color={BUTTON_COLORS.PRIMARY}>
        Primary
      </Button>
      <Button {...args} color={BUTTON_COLORS.SECONDARY}>
        Secondary
      </Button>
      <Button {...args} color={BUTTON_COLORS.SUCCESS}>
        Success
      </Button>
      <Button {...args} color={BUTTON_COLORS.WARNING}>
        Warning
      </Button>
      <Button {...args} color={BUTTON_COLORS.DANGER}>
        Danger
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays buttons with shadow variant across different colors.',
      },
    },
  },
};

export const LightVariantColors: Story = {
  args: {
    children: '',
    variant: BUTTON_VARIANTS.LIGHT,
  },
  render: (args) => (
    <div className="flex gap-5">
      <Button {...args} color={BUTTON_COLORS.PRIMARY}>
        Primary
      </Button>
      <Button {...args} color={BUTTON_COLORS.SECONDARY}>
        Secondary
      </Button>
      <Button {...args} color={BUTTON_COLORS.SUCCESS}>
        Success
      </Button>
      <Button {...args} color={BUTTON_COLORS.WARNING}>
        Warning
      </Button>
      <Button {...args} color={BUTTON_COLORS.DANGER}>
        Danger
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays buttons with light variant across different colors.',
      },
    },
  },
};
