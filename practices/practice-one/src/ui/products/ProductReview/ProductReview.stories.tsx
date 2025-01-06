import { Meta, StoryFn } from '@storybook/react';

// UI
import { ProductReviews } from '@/ui';

export default {
  title: 'UI/Products/ProductReviews',
  component: ProductReviews,
  tags: ['autodocs'],
  argTypes: {
    reviews: {
      description:
        'An array of product reviews, each containing details like reviewer name, email, rating, date, and comment.',
      control: { type: 'object' },
      table: {
        category: 'Primary',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Displays a list of product reviews with details like reviewer name, date, email, rating, and comment. If no reviews are present, a message encourages users to submit a review.',
      },
    },
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#d3d3d3' }],
    },
  },
} as Meta;

const Template: StoryFn<typeof ProductReviews> = (args) => (
  <ProductReviews {...args} />
);

export const SingleReview = Template.bind({});
SingleReview.args = {
  reviews: [
    {
      reviewerName: 'John Doe',
      reviewerEmail: 'johndoe@example.com',
      date: '2024-01-01',
      rating: 4.5,
      comment: 'Amazing product! Highly recommend.',
    },
  ],
};
SingleReview.parameters = {
  docs: {
    description: {
      story:
        'Shows a single review with details like name, email, date, rating, and comment.',
    },
  },
};

export const MultipleReviews = Template.bind({});
MultipleReviews.args = {
  reviews: [
    {
      reviewerName: 'Alice Johnson',
      reviewerEmail: 'alicej@example.com',
      date: '2024-01-02',
      rating: 5,
      comment: 'Absolutely fantastic product!',
    },
    {
      reviewerName: 'Bob Smith',
      reviewerEmail: 'bobsmith@example.com',
      date: '2024-01-03',
      rating: 4,
      comment: 'Great product, but the shipping was slow.',
    },
    {
      reviewerName: 'Charlie Brown',
      reviewerEmail: 'charlieb@example.com',
      date: '2024-01-04',
      rating: 3.5,
      comment: 'Good quality, but not worth the price.',
    },
  ],
};
MultipleReviews.parameters = {
  docs: {
    description: {
      story:
        'Displays multiple reviews with diverse ratings, comments, and reviewer details.',
    },
  },
};
