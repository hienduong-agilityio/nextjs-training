// Libraries
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/layouts';

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Header` component serves as the `<header/>` element for the e-commerce application. It includes a logo, search functionality, profile, and cart icons.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default view of the Header component.',
      },
    },
  },
};
