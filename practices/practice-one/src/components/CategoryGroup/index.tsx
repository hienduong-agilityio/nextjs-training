'use client';

// Libraries
import { useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

// Components
import Link from 'next/link';

interface ICategoryGroupProps {
  title: string;
  items: { name: string; count: number }[];
}

export function CategoryGroup({ title, items }: ICategoryGroupProps) {
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') ?? 'all';
  const currentSearch = searchParams.get('search') ?? '';

  const handleCategoryClick = (itemName: string) => {
    const updatedParams = new URLSearchParams();

    // Update the category query parameter
    if (itemName !== 'all') {
      updatedParams.set('category', itemName);
    }

    // Preserve the search query parameter
    if (currentSearch.trim()) {
      updatedParams.set('search', currentSearch);
    }

    return `/collection?${updatedParams.toString()}`;
  };

  return (
    <div className="mb-6 bg-secondary-100 p-4 rounded">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item) => {
          const isActive =
            item.name === 'all'
              ? currentCategory === 'all' || !currentCategory
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
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
