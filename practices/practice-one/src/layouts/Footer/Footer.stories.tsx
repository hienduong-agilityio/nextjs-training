// Libraries
import type { Meta, StoryObj } from '@storybook/react';

// Layouts
import { Footer } from '@/layouts';

const meta: Meta<typeof Footer> = {
  title: 'Layouts/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Footer` component serves as the `<footer/>` element for the e-commerce site. It includes sections for the logo, navigation links, follow and contact information, and payment options.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};
