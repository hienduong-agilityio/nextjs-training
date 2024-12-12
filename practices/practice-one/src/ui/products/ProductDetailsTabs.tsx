'use client';

// Components
import { Tabs } from '@/components';

// Services
import { getProductById } from '@/services';

export async function ProductDetailsTabs({ productId }: { productId: string }) {
  const productData = await getProductById(productId);

  const tabItems = [
    {
      title: 'Product Information',
      content: <p>{productData.description}</p>,
    },
    {
      title: 'Reviews',
      content: <p>No reviews yet. Be the first to write one!</p>,
    },
    {
      title: 'Another Tab',
      content: <p>Content for another tab goes here.</p>,
    },
  ];

  const handleTabChange = (tab: string) => {
    if (!tab) {
      return;
    }
  };

  return (
    <section className="mt-8 px-4 rounded-md py-8 bg-secondary-50">
      <Tabs
        items={tabItems}
        selectedTab="Product Information"
        onTabChange={handleTabChange}
        customClass={{
          wrapper: 'flex flex-col gap-y-6 w-full',
          header: 'flex justify-start gap-7 overflow-auto w-auto border-b',
          button:
            'p-3 text-sm font-medium transition-colors duration-200 text-center outline-none border-b-2 capitalize hover:text-primary-100',
          activeButton: 'text-primary-400 border-primary-400',
          content: 'max-w-6xl text-secondary-500',
          activeContent: 'text-sm leading-6',
          inactiveContent: 'hidden',
        }}
      />
    </section>
  );
}
