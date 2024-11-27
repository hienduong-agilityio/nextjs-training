'use client';

import { Select } from '@/components';

interface FilterSortBarProps {
  itemCount: number;
  sortOptions: string[];
  showOptions: string[];
  viewMode: 'grid' | 'list';
  onSortChange?: (value: string) => void;
  onShowChange?: (value: string) => void;
}

export const FilterSortBar = ({
  itemCount,
  sortOptions,
  showOptions,
  onShowChange,
  onSortChange,
}: FilterSortBarProps) => {
  const handleSortChange = (value: string) => {
    if (!onSortChange) {
      return;
    }

    onSortChange(value);
  };

  const handleShowChange = (value: string) => {
    if (!onShowChange) {
      return;
    }

    onShowChange(value);
  };

  return (
    <div className="bg-secondary-100 p-4 shadow-md md:sticky rounded top-0 z-50 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        {/* Item count */}
        <div className="text-sm text-gray-600">{itemCount} Items</div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <Select
            options={sortOptions}
            defaultValue={sortOptions[0]}
            customClass="md:w-40 bg-secondary-100"
            onChange={(e) => handleSortChange(e.target.value)}
          />
          <Select
            options={showOptions}
            defaultValue={showOptions[0]}
            customClass="md:w-40 bg-secondary-100"
            onChange={(e) => handleShowChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
