'use client';

// Libraries
import { useOptimistic } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

// Helpers
import { capitalizeText } from '@/helpers';

// Constants
import { ALL_CATEGORIES, SEARCH_PARAMS } from '@/constants';

interface ICategoryGroupProps {
  title: string;
  items: { name: string; count: number }[];
}

export function CategoryGroup({ title, items }: ICategoryGroupProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [optimisticCategory, setOptimisticCategory] = useOptimistic(
    searchParams.get(SEARCH_PARAMS.CATEGORY) ?? ALL_CATEGORIES.ALL,
  );

  const generateCategoryParams = (category: string) => {
    const updatedParams = new URLSearchParams();

    // Update the category query parameter
    if (category !== ALL_CATEGORIES.ALL) {
      updatedParams.set(SEARCH_PARAMS.CATEGORY, category);
    }

    return `${pathname}?${updatedParams.toString()}`;
  };

  return (
    <div className="mb-6 bg-secondary-100 p-4 rounded">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item) => {
          const isActive =
            item.name === ALL_CATEGORIES.ALL
              ? optimisticCategory === ALL_CATEGORIES.ALL || !optimisticCategory
              : item.name === optimisticCategory;

          const handleCategorySelection = (category: string) => () =>
            setOptimisticCategory(category);

          return (
            <li key={item.name}>
              <Link
                href={generateCategoryParams(item.name)}
                onClick={handleCategorySelection(item.name)}
                className={twMerge(
                  'w-full flex justify-start font-semibold py-2 rounded bg-secondary-100 hover:bg-secondary-300',
                  isActive
                    ? 'text-primary-200 bg-secondary-300'
                    : 'text-gray-800',
                )}
              >
                {capitalizeText(item.name)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
