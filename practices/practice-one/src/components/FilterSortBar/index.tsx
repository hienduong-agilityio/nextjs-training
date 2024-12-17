'use client';

// Hooks
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Components
import { Select } from '@/components';

// Constants
import { SEARCH_PARAMS, SORT_PRODUCT_OPTIONS } from '@/constants';

interface FilterSortBarProps {
  itemCount: number;
  sortOptions: string[];
  showOptions: string[];
}

export const FilterSortBar = ({
  itemCount = 0,
  sortOptions = SORT_PRODUCT_OPTIONS,
  showOptions = ['6'],
}: FilterSortBarProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedLimit, setSelectedLimit] = useState<string>(showOptions[0]);
  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);

  // TODO: Remove useEffect.
  useEffect(() => {
    // Get query parameters from the URL
    const limitParam = searchParams.get(SEARCH_PARAMS.LIMIT) ?? showOptions[0];
    const sortParam = searchParams.get(SEARCH_PARAMS.SORT_BY) ?? sortOptions[0];

    setSelectedLimit(limitParam);
    setSelectedSort(sortParam);
  }, [searchParams, showOptions, sortOptions]);

  const updateQueryParams = (param: string, value: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set(param, value);

    // Reset pagination if a filter changes
    if (param === SEARCH_PARAMS.LIMIT) {
      currentParams.delete(SEARCH_PARAMS.PAGE);
    }

    router.push(`?${currentParams.toString()}`);
  };

  const handleShowChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setSelectedLimit(value);
    updateQueryParams(SEARCH_PARAMS.LIMIT, value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setSelectedSort(value);
    updateQueryParams(SEARCH_PARAMS.SORT_BY, value);
  };

  return (
    <div className="bg-secondary-100 p-4 shadow-md md:sticky rounded top-0 z-30 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        {/* Item count */}
        <div className="text-sm w-max text-gray-600">{itemCount} Items</div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="flex gap-2 items-center">
            <span>Sort</span>
            {/* TODO: Custom style for select arrow by tailwinds classes*/}
            <Select
              options={sortOptions}
              value={selectedSort}
              customClass="w-auto bg-secondary-100 capitalize"
              onChange={handleSortChange}
            />
          </div>
          <div className="flex gap-2 items-center">
            <span>Show</span>
            <Select
              options={showOptions}
              value={selectedLimit}
              customClass="w-auto bg-secondary-100"
              onChange={handleShowChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
