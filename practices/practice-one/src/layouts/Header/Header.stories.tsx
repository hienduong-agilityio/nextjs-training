import { Meta, StoryFn } from '@storybook/react';

// Layouts
import { Header } from '@/layouts';

export default {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    itemCount: {
      description: 'The number of items in the cart.',
      control: { type: 'number', min: 0 },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `Header` component is the navigation element for the application.',
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemCount: 0,
};
Default.parameters = {
  docs: {
    description: {
      story:
        'Displays the `Header` component with default settings and no items in the cart.',
    },
  },
};

export const WithCartItems = Template.bind({});
WithCartItems.args = {
  itemCount: 5,
};
WithCartItems.parameters = {
  docs: {
    description: {
      story:
        'Shows the `Header` component with 5 items in the cart, demonstrating the cart item count functionality.',
    },
  },
};
