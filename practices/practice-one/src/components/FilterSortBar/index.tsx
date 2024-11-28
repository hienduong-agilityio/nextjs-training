'use client';

// Hooks
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Components
import { Select } from '@/components';

interface FilterSortBarProps {
  itemCount: number;
  sortOptions: string[];
  showOptions: string[];
}

export const FilterSortBar = ({
  itemCount,
  sortOptions,
  showOptions,
}: FilterSortBarProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedLimit, setSelectedLimit] = useState<string>(showOptions[0]);
  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);

  useEffect(() => {
    // Get query parameters from the URL
    const limitParam = searchParams.get('limit') ?? showOptions[0];
    const sortParam = searchParams.get('sortBy') ?? sortOptions[0];

    setSelectedLimit(limitParam);
    setSelectedSort(sortParam);
  }, [searchParams, showOptions, sortOptions]);

  const handleShowChange = (value: string) => {
    setSelectedLimit(value);
    const currentParams = new URLSearchParams(searchParams.toString());

    currentParams.set('limit', value);
    router.push(`?${currentParams.toString()}`);
  };

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
    const currentParams = new URLSearchParams(searchParams.toString());

    currentParams.set('sortBy', value);
    router.push(`?${currentParams.toString()}`);
  };

  return (
    <div className="bg-secondary-100 p-4 shadow-md md:sticky rounded top-0 z-50 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        {/* Item count */}
        <div className="text-sm text-gray-600">{itemCount} Items</div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="flex gap-2 items-center">
            <span>Sort</span>
            <Select
              options={sortOptions}
              value={selectedSort}
              customClass="md:w-40 bg-secondary-100"
              onChange={(e) => handleSortChange(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <span>Show</span>
            <Select
              options={showOptions}
              value={selectedLimit}
              customClass="md:w-40 bg-secondary-100"
              onChange={(e) => handleShowChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
