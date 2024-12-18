'use client';

// Libraries
import { useSearchParams, useRouter } from 'next/navigation';
import { startTransition, useEffect, useOptimistic, useState } from 'react';

// Icon
import { SearchIcon } from '@/icons';

// Components
import { IInputGroupProps, InputGroup } from '@/components';

// Constants
import { ROUTE, SEARCH_PARAMS } from '@/constants';

export interface ISearchBoxProps extends IInputGroupProps {
  onSearch?: () => void;
}

export const SearchBox = ({
  placeholder = 'Enter your query...',
  buttonText = 'Search',
  customClass = {},
  onSearch,
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    startTransition(() => {
      setIsLoading(true);
    });

    const currentParams = new URLSearchParams();

    if (inputValue.trim()) {
      currentParams.set(SEARCH_PARAMS.SEARCH, inputValue.trim());
    }

    router.push(`${ROUTE.COLLECTION}?${currentParams.toString()}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();

      if (onSearch) {
        onSearch();
      }
    }
  };

  return (
    <InputGroup
      placeholder={placeholder}
      startContent={<SearchIcon color="#40BFFF" className="lg:hidden block" />}
      buttonText={isLoading ? 'Loading...' : buttonText}
      isDisabled={isLoading}
      customClass={customClass}
      onInputChange={handleInputChange}
      onButtonClick={handleSearch}
      value={inputValue}
      onKeyDown={handleKeyDown}
    />
  );
};
