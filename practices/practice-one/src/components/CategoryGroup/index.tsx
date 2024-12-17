'use client';

// Libraries
import { usePathname, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

// Components
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

  const currentCategory =
    searchParams.get(SEARCH_PARAMS.CATEGORY) ?? ALL_CATEGORIES.ALL;

  const handleCategoryClick = (itemName: string) => {
    const updatedParams = new URLSearchParams();

    // Update the category query parameter
    if (itemName !== ALL_CATEGORIES.ALL) {
      updatedParams.set(SEARCH_PARAMS.CATEGORY, itemName);
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
              ? currentCategory === ALL_CATEGORIES.ALL || !currentCategory
              : item.name === currentCategory;

          return (
            <li className="flex justify-between" key={item.name}>
              <Link
                href={handleCategoryClick(item.name)}
                className={twMerge(
                  'w-full block font-semibold py-2 rounded hover:bg-secondary-200',
                  isActive
                    ? 'bg-primary-500 text-primary-200'
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
