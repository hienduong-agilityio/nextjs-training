'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface FilterGroupProps {
  title: string;
  items: { name: string; count: number }[];
  currentCategory: string;
}

export const FilterGroup = ({
  title,
  items,
  currentCategory,
}: FilterGroupProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (category: string) => {
    const newParams = new URLSearchParams(searchParams?.toString());
    const lowerCaseCategory = category.toLowerCase();

    if (lowerCaseCategory === currentCategory.toLowerCase()) {
      newParams.delete('category');
    } else {
      newParams.set('category', lowerCaseCategory);
    }

    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="mb-6 bg-secondary-100 p-4 rounded">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item) => (
          <li key={item.name} className="flex justify-between py-2">
            <button
              className={`font-semibold capitalize  ${
                item.name === currentCategory ? 'text-primary-200' : ''
              }`}
              onClick={() => handleCategoryClick(item.name)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
