// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { ServiceCard } from '@/components';

const meta = {
  title: 'Components/Service/ServiceCard',
  component: ServiceCard,
  parameters: {
    docs: {
      description: {
        component:
          'A ServiceCard component that displays an icon, title, and detailed description for a service. Useful for highlighting features or services in a grid layout.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'React Node for the service icon.',
      control: 'text',
    },
    title: {
      description: 'Title of the service.',
      control: 'text',
    },
    details: {
      description: 'Detailed description of the service.',
      control: 'text',
    },
  },
} satisfies Meta<typeof ServiceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: '🔧',
    title: 'Default Service',
    details: 'This is a brief description of the default service.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default ServiceCard with an icon, title, and description.',
      },
    },
  },
};

export const WithCustomIcon: Story = {
  args: {
    icon: '🚀',
    title: 'Rocket Service',
    details: 'Providing out-of-this-world service with speed and reliability.',
  },
  parameters: {
    docs: {
      description: {
        story: 'ServiceCard with a custom rocket icon.',
      },
    },
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Icon-Free Service',
    details: 'This service focuses solely on the details and title.',
  },
  parameters: {
    docs: {
      description: {
        story: 'ServiceCard without an icon.',
      },
    },
  },
};
