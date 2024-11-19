'use client';

// Libraries
import { memo, useRef } from 'react';

// Components
import { Button, InputField } from '@/components';

// Enums
import { BUTTON_COLORS, BUTTON_VARIANTS } from '@/enums';

export interface ISearchBoxProps {
  placeholder?: string;
  buttonText?: string;
  onSearch: (value: string) => void;
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
  onSearch,
  customClass = {},
}: ISearchBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current && inputRef.current.value.trim() !== '') {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <div className={`flex ${customClass.container ?? ''}`}>
      <InputField
        placeholder={placeholder}
        ref={inputRef}
        customClass={{
          container: `border-blue-300 rounded-r-none ${customClass.inputContainer ?? ''}`,
          input: `h-16 w-[520px] text-gray-700 ${customClass.input ?? ''}`,
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
