'use client';

// Libraries
import { useSearchParams, useRouter } from 'next/navigation';
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
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialTab = searchParams.get('activeTab') ?? 'Product Information';
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    const params = new URLSearchParams(searchParams);

    params.set('activeTab', tab);
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const queryTab = searchParams.get('activeTab');

    if (queryTab && queryTab !== activeTab) {
      setActiveTab(queryTab);
    }
  }, [activeTab, searchParams]);

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
        onTabChange={handleTabChange}
        customClass={{
          wrapper: 'flex flex-col gap-y-6 w-full',
          header: 'flex justify-start gap-7 w-auto pb-3 border-b-2',
          link: 'p-3 text-sm font-medium transition-colors duration-200 text-center outline-none border-b-2 capitalize hover:text-primary-100',
          activeLink: 'text-primary-400 border-primary-400',
          content: 'max-w-6xl text-secondary-500',
          activeContent: 'text-sm leading-6',
          inactiveContent: 'hidden',
        }}
      />
    </section>
  );
}
