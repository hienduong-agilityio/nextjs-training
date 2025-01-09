// Libraries
import { Meta, StoryObj } from '@storybook/react';

// Components
import { IServiceCardProps, ServiceCard } from '@/components';

// Mocks
import { SERVICE_CARD } from '@/mocks';

const meta = {
  title: 'Components/ServiceCard',
  component: ServiceCard,
  parameters: {
    docs: {
      description: {
        component:
          'A `ServiceCard` component that displays an icon, title, and detailed description for a service. Useful for highlighting features or services in a grid layout.',
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

// Shared render logic for all stories
const renderServiceCard = (args: IServiceCardProps) => (
  <div className="w-[40svw] flex justify-center">
    <ServiceCard {...args} />
  </div>
);

export const Default: Story = {
  render: renderServiceCard,
  args: SERVICE_CARD.default,
  parameters: {
    docs: {
      description: {
        story: 'Default `ServiceCard` with an icon, title, and description.',
      },
    },
  },
};

export const WithCustomIcon: Story = {
  render: renderServiceCard,
  args: SERVICE_CARD.customIcon,
  parameters: {
    docs: {
      description: {
        story: '`ServiceCard` with a custom rocket icon.',
      },
    },
  },
};

export const WithoutIcon: Story = {
  render: renderServiceCard,
  args: SERVICE_CARD.withoutIcon,
  parameters: {
    docs: {
      description: {
        story: '`ServiceCard` without an icon.',
      },
    },
  },
};
