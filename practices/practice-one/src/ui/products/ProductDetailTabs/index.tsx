'use client';

// Libraries
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

// Components
import { Tabs } from '@/components';
import { ProductReviews } from '@/ui';

// Types
import type { IProductProps } from '@/interfaces';

// Constants
import { SEARCH_PARAMS } from '@/constants';

type ProductDetailTabsProps = Pick<IProductProps, 'description' | 'reviews'>;

export function ProductDetailTabs({
  description,
  reviews = [],
}: ProductDetailTabsProps) {
  const searchParams = useSearchParams();
  const queryTab =
    searchParams.get(SEARCH_PARAMS.ACTIVE_TAB) ?? 'Product Information';

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
        href: `?${SEARCH_PARAMS.ACTIVE_TAB}=Product Information`,
        content: <p>{description}</p>,
      },
      {
        title: 'Reviews',
        href: `?${SEARCH_PARAMS.ACTIVE_TAB}=Reviews`,
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
          wrapper: 'flex flex-col w-full',
          header:
            'flex justify-start gap-7 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide w-auto p-3',
          link: 'p-3 text-sm font-medium transition-colors duration-200 text-center outline-none border-b-2 capitalize hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
          activeLink: 'text-primary-400 border-primary-400',
          content: 'text-secondary-500 px-3',
          activeContent: 'text-sm leading-6 pt-7 border-t-2',
          inactiveContent: 'hidden',
        }}
      />
    </section>
  );
}
