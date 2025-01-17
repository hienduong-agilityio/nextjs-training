'use client';

// Libraries
import { useSearchParams, useRouter } from 'next/navigation';
import { startTransition, useOptimistic } from 'react';

// Icon
import { SearchIcon } from '@/icons';

// Components
import { InputGroup } from '@/components';

// Constants
import { ROUTE, SEARCH_PARAMS } from '@/constants';

// Types
import type { IInputGroupProps } from '@/interfaces';

export interface ISearchBoxProps extends IInputGroupProps {
  onCloseModal?: () => void;
}

// TODO: Find common solution for change Search Box text when searching
export const SearchBox = ({
  placeholder = 'Enter your query...',
  customClass = {},
  onCloseModal,
}: ISearchBoxProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useOptimistic(false);

  const searchParam = searchParams.get(SEARCH_PARAMS.SEARCH) ?? '';

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newSearchValue = (formData.get('searchBox') as string).trim();

    startTransition(() => {
      setIsLoading(true);
    });

    const currentParams = new URLSearchParams();
    currentParams.set(SEARCH_PARAMS.SEARCH, newSearchValue);

    router.push(`${ROUTE.COLLECTION}?${currentParams.toString()}`);

    onCloseModal?.();
  };

  return (
    <InputGroup
      value={searchParam}
      placeholder={placeholder}
      inputName="searchBox"
      startIcon={<SearchIcon color="#40BFFF" className="lg:hidden block" />}
      isLoading={isLoading}
      customClass={customClass}
      onSubmit={handleSearch}
    />
  );
};
