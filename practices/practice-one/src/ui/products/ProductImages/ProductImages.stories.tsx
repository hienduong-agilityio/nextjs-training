// Libraries
import { Meta, StoryFn } from '@storybook/react';

// UI
import { ProductImages } from '@/ui';

export default {
  title: 'UI/Products/ProductImages',
  component: ProductImages,
  tags: ['autodocs'],
  argTypes: {
    images: {
      description:
        'An array of image URLs to display in the component. If no images are provided, a placeholder image will be shown.',
    },
    name: {
      description:
        'The name or alt text for the images, providing better accessibility and SEO.',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '`ProductImages` displays a primary product image with optional thumbnails for additional views.',
      },
    },
  },
} satisfies Meta;

const Template: StoryFn<{ images: string[]; name: string }> = (args) => (
  <ProductImages {...args} />
);

export const Default = Template.bind({});
Default.args = {
  images: ['/images/product-mock.png'],
  name: 'Placeholder Product',
};
Default.parameters = {
  docs: {
    description: {
      story: 'The `ProductImages` component with a single placeholder image.',
    },
  },
};

export const MultipleImages = Template.bind({});
MultipleImages.args = {
  images: [
    '/images/product-mock.png',
    '/images/product-mock.png',
    '/images/product-mock.png',
    '/images/product-mock.png',
  ],
  name: 'Sample Product',
};
MultipleImages.parameters = {
  docs: {
    description: {
      story:
        'The `ProductImages` component display multiple product images. It shows a primary image and smaller thumbnails for alternate views.',
    },
  },
};

export const EmptyImage = Template.bind({});
EmptyImage.args = {
  images: ['/images/image-placeholder.svg'],
  name: 'Single Product Image',
};
EmptyImage.parameters = {
  docs: {
    description: {
      story:
        'The `ProductImages` component with a single placeholder image when no other images are available.',
    },
  },
};
