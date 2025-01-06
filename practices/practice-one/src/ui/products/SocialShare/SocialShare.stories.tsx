import { SocialShare } from '@/ui';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'UI/Products/SocialShare',
  component: SocialShare,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Provides buttons for sharing a product on social media platforms like Facebook and Twitter. Includes responsive styles and interactive hover effects.',
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof SocialShare> = () => <SocialShare />;

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story:
        'Displays the default `SocialShare` component with buttons for sharing on Facebook and Twitter.',
    },
  },
};
