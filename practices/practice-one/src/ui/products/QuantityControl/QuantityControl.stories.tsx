import { Meta, StoryFn } from '@storybook/react';

// UI
import { QuantityControl, IQuantityControlProps } from '@/ui';

export default {
  title: 'UI/Products/QuantityControl',
  component: QuantityControl,
  tags: ['autodocs'],
  argTypes: {
    initialQuantity: {
      description:
        'The starting quantity value. Must be between 1 and maxQuantity.',
      control: { type: 'number', min: 1 },
      table: { category: 'Primary' },
    },
    maxQuantity: {
      description: 'The maximum allowable quantity.',
      control: { type: 'number', min: 1 },
      table: { category: 'Primary' },
    },
    isLoading: {
      description: 'Disables the input and buttons when true.',
      control: { type: 'boolean' },
      table: { category: 'Secondary' },
    },
    onQuantityChange: {
      description: 'Callback triggered when the quantity changes.',
      action: 'quantityChanged',
      table: { category: 'Secondary' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A component for managing quantities, typically used in shopping carts or inventory management systems. Includes increment, decrement, and direct input functionality.',
      },
    },
  },
} as Meta;

const Template: StoryFn<IQuantityControlProps> = (args) => (
  <QuantityControl {...args} />
);

export const Default = Template.bind({});
Default.args = {
  initialQuantity: 1,
  maxQuantity: 10,
};
Default.parameters = {
  docs: {
    description: {
      story:
        'Demonstrates the default functionality with an initial quantity of 1 and a maximum quantity of 10.',
    },
  },
};

export const MaximumReached = Template.bind({});
MaximumReached.args = {
  initialQuantity: 10,
  maxQuantity: 10,
};
MaximumReached.parameters = {
  docs: {
    description: {
      story:
        'Displays the component with the quantity already at its maximum limit.',
    },
  },
};
