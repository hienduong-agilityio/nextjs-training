'use client';

// Libraries
import { useSearchParams, useRouter } from 'next/navigation';
import { startTransition, useEffect, useOptimistic, useState } from 'react';

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

export const SearchBox = ({
  placeholder = 'Enter your query...',
  buttonText = 'Search',
  customClass = {},
  onCloseModal,
}: ISearchBoxProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useOptimistic(false);

  // Sync input value with URL `search` parameter on mount or when URL updates
  useEffect(() => {
    startTransition(() => {
      setIsLoading(false);
    });

    const searchParam = searchParams.get(SEARCH_PARAMS.SEARCH) ?? '';

    setInputValue(searchParam);
  }, [searchParams, setIsLoading]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newSearchValue = (formData.get('searchBox') as string).trim();

    setInputValue(newSearchValue);

    if (newSearchValue) {
      startTransition(() => {
        setIsLoading(true);
      });

      const currentParams = new URLSearchParams();
      currentParams.set(SEARCH_PARAMS.SEARCH, newSearchValue);

      router.push(`${ROUTE.COLLECTION}?${currentParams.toString()}`);
    }

    onCloseModal?.();
  };

  return (
    <InputGroup
      value={inputValue}
      placeholder={placeholder}
      startIcon={<SearchIcon color="#40BFFF" className="lg:hidden block" />}
      buttonText={isLoading ? 'Loading...' : buttonText}
      isDisabled={isLoading}
      customClass={customClass}
      onSubmit={handleSearch}
    />
  );
};
