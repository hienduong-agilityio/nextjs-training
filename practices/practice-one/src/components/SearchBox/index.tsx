'use client';

// Libraries
import { memo, useState, useEffect, useOptimistic } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Components
import { Button, InputField } from '@/components';

// Enums
import { BUTTON_COLORS, BUTTON_VARIANTS } from '@/enums';
import { SearchIcon } from '@/icons';

export interface ISearchBoxProps {
  placeholder?: string;
  buttonText?: string;
  customClass?: {
    container?: string;
    inputContainer?: string;
    input?: string;
    button?: string;
  };
  onSearch?: () => void;
}

const SearchBox = ({
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
    setIsLoading(false);

    const searchParam = searchParams.get('search') ?? '';

    setInputValue(searchParam);
  }, [searchParams, setIsLoading]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true);

    const currentParams = new URLSearchParams();

    if (inputValue.trim()) {
      currentParams.set('search', inputValue.trim());
    }

    router.push(`/collection?${currentParams.toString()}`);
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
    <div className={`flex ${customClass.container ?? ''}`}>
      <InputField
        placeholder={placeholder}
        startContent={
          <SearchIcon color="#40BFFF" className="lg:hidden block" />
        }
        value={inputValue}
        type="search"
        id="gsearch"
        name="gsearch"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        customClass={{
          container: `border-blue-300 lg:rounded-r-none p-2 ${customClass.inputContainer ?? ''}`,
          input: `h-16 text-gray-700 appearance-none [&::-webkit-search-cancel-button]:cursor-pointer ${customClass.input ?? ''}`,
        }}
      />
      <Button
        customClass={`px-7 rounded-l-none hidden lg:block ${customClass.button ?? ''}`}
        type="submit"
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.SOLID}
        onClick={handleSearch}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : buttonText}
      </Button>
    </div>
  );
};

export default memo(SearchBox);
