'use client';

// Libraries
import { redirect } from 'next/navigation';

// Mock
import { CATEGORIES } from '@/mocks';

// Components
import { Tabs, ProductCard } from '@/components';

// Types
import type { IProductProps } from '@/interfaces';
import type { Category } from '@/types/category';

// Constants
import { ALL_CATEGORIES } from '@/constants';

interface ProductTabsProps {
  category?: string;
  productData: IProductProps[];
}

export const ProductTabs = ({
  category = ALL_CATEGORIES.ALL,
  productData,
}: ProductTabsProps) => {
  const lowerCaseCategory = category.toLowerCase() as Category;

  // Check category validity
  if (category && !CATEGORIES.includes(lowerCaseCategory)) {
    redirect('/products');
  }

  // Map categories to tabs
  const productsByCategory = CATEGORIES.map((category) => ({
    title: category,
    href:
      category.toLowerCase() === ALL_CATEGORIES.ALL
        ? '/products'
        : `/products/${category}`,
    content: (category.toLowerCase() === ALL_CATEGORIES.ALL
      ? productData
      : productData.filter(
          (product) =>
            product.category?.toLowerCase() === category.toLowerCase(),
        )
    ).map((product) => <ProductCard key={product.id} {...product} />),
  }));

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-semibold uppercase">Best seller</h2>
      <Tabs
        items={productsByCategory}
        selectedTab={category.toLowerCase()}
        customClass={{
          wrapper: 'flex flex-col w-full',
          header:
            'flex md:justify-center gap-7 w-full overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide pb-4 pt-2',
          link: 'p-3 pt-2 text-sm font-medium transition-colors duration-200 text-center outline-none border-b-2 border-transparent capitalize hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black',
          activeLink: 'text-primary-400 border-primary-400',
          content: 'mt-4',
          activeContent:
            'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6',
          inactiveContent: 'hidden',
        }}
      />
    </div>
  );
};
