'use client';

// Libraries
import { memo, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Components
import { Button, InputField } from '@/components';

// Enums
import { BUTTON_COLORS, BUTTON_VARIANTS } from '@/enums';

export interface ISearchBoxProps {
  placeholder?: string;
  buttonText?: string;
  customClass?: {
    container?: string;
    inputContainer?: string;
    input?: string;
    button?: string;
  };
}

const SearchBox = ({
  placeholder = 'Enter your query...',
  buttonText = 'Search',
  customClass = {},
}: ISearchBoxProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Check if input value is the same as the current search param
  const isButtonDisabled =
    isLoading ||
    inputValue.trim() === (searchParams.get('search') ?? '').trim();

  // Sync input value with URL `search` parameter on mount or when URL updates
  useEffect(() => {
    const searchParam = searchParams.get('search') ?? '';
    setInputValue(searchParam);
  }, [searchParams]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true);

    const currentParams = new URLSearchParams();
    const categoryParam = searchParams.get('category');

    if (categoryParam) {
      currentParams.set('category', categoryParam);
    }

    if (inputValue.trim()) {
      currentParams.set('search', inputValue.trim());
    }

    router.push(`/collection?${currentParams.toString()}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isButtonDisabled) {
      handleSearch();
    }
  };

  // Effect to update loading state on URL change
  useEffect(() => {
    setIsLoading(false);
  }, [searchParams]);

  return (
    <div className={`flex ${customClass.container ?? ''}`}>
      <InputField
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        customClass={{
          container: `border-blue-300 rounded-r-none ${customClass.inputContainer ?? ''}`,
          input: `h-16 text-gray-700 ${customClass.input ?? ''}`,
        }}
      />
      <Button
        customClass={`px-7 rounded-l-none ${customClass.button ?? ''}`}
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.SOLID}
        onClick={handleSearch}
        disabled={isButtonDisabled}
      >
        {isLoading ? 'Loading...' : buttonText}
      </Button>
    </div>
  );
};

export default memo(SearchBox);
