'use client';

// Libraries
import { memo, useState } from 'react';
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      const currentParams = new URLSearchParams(searchParams.toString());

      currentParams.set('name', inputValue.trim());
      router.push(`/collection?${currentParams.toString()}`);
    }
  };

  return (
    <div className={`flex ${customClass.container ?? ''}`}>
      <InputField
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
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
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default memo(SearchBox);
