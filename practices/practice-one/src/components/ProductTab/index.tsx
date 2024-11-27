'use client';

// Libraries
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Mock
import { CATEGORIES } from '@/mocks';

// Components
import { Tabs, ProductCard } from '@/components';

// Types
import type { IProductProps } from '@/interfaces';
import type { Category } from '@/types/category';

interface ProductTabsProps {
  category?: string;
  productData: IProductProps[];
}

export const ProductTabs = ({
  category = 'all',
  productData,
}: ProductTabsProps) => {
  const router = useRouter();

  useEffect(() => {
    if (category && !CATEGORIES.includes(category.toLowerCase() as Category)) {
      router.replace('/products');
    }
  }, [category, router]);

  const handleTabChange = (selectedCategory: string) => {
    router.push(
      selectedCategory.toLowerCase() === 'all'
        ? '/products'
        : `/products/${selectedCategory}`,
    );
  };

  // Map categories to tabs
  const items = CATEGORIES.map((cat) => ({
    title: cat,
    content: (cat.toLowerCase() === 'all'
      ? productData
      : productData.filter(
          (product) => product.category?.toLowerCase() === cat.toLowerCase(),
        )
    ).map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
        originalPrice={product.originalPrice}
        discount={product.discount}
        rating={product.rating}
      />
    )),
  }));

  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-semibold uppercase">Best seller</h2>
      <Tabs
        items={items}
        selectedTab={category.toLowerCase()}
        onTabChange={handleTabChange}
        customClass={{
          wrapper: 'max-w-6xl flex flex-col gap-y-6 w-full',
          header: 'flex justify-center gap-7 overflow-auto w-auto',
          button:
            'p-3 text-sm font-medium transition-colors duration-200 text-center outline-none border-b-2 capitalize hover:text-primary-100',
          activeButton: 'text-primary-400 border-primary-400',
          content: 'mt-4',
          activeContent:
            'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6',
          inactiveContent: 'hidden',
        }}
      />
    </section>
  );
};
