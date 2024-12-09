'use client';

// Libraries
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

// Components
import { Tabs } from '@/components';
import { ProductDescription, ProductReviews } from '@/ui';

// Types
import type { IProductProps } from '@/interfaces';

type ProductDetailsTabsProps = Pick<IProductProps, 'description' | 'reviews'>;

export function ProductDetailsTabs({
  description,
  reviews = [],
}: ProductDetailsTabsProps) {
  const searchParams = useSearchParams();
  const queryTab = searchParams.get('activeTab') ?? 'Product Information';

  const [activeTab, setActiveTab] = useState<string>(queryTab);

  useEffect(() => {
    if (queryTab && queryTab !== activeTab) {
      setActiveTab(queryTab);
    }
  }, [activeTab, queryTab]);

  const tabItems = useMemo(
    () => [
      {
        title: 'Product Information',
        href: `?activeTab=Product Information`,
        content: <ProductDescription description={description ?? ''} />,
      },
      {
        title: 'Reviews',
        href: `?activeTab=Reviews`,
        content: <ProductReviews reviews={reviews} />,
      },
    ],
    [description, reviews],
  );

  return (
    <section className="mt-8 px-4 rounded-md py-8 bg-secondary-50">
      <Tabs
        items={tabItems}
        selectedTab={activeTab}
        customClass={{
          wrapper: 'flex flex-col gap-y-6 w-full',
          header: 'flex justify-start gap-7 w-auto pb-3 border-b-2',
          link: 'p-3 text-sm font-medium transition-colors duration-200 text-center outline-none border-b-2 capitalize hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
          activeLink: 'text-primary-400 border-primary-400',
          content: 'text-secondary-500',
          activeContent: 'text-sm leading-6',
          inactiveContent: 'hidden',
        }}
      />
    </section>
  );
}
