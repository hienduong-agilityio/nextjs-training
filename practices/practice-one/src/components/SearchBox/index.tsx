// Libraries
import { memo } from 'react';

// Components
import { Button, InputField } from '@/components';

// Enums
import { BUTTON_COLORS, BUTTON_VARIANTS } from '@/enums';

export interface ISearchBoxProps {
  placeholder?: string;
  buttonText?: string;
  value?: string;
  onChange?: () => void;
  onSearch?: () => void;
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
  value,
  onChange,
  onSearch,
  customClass = {},
}: ISearchBoxProps) => {
  return (
    <div className={`flex ${customClass.container ?? ''}`}>
      <InputField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        customClass={{
          container: `border-blue-300 rounded-r-none ${customClass.inputContainer ?? ''}`,
          input: `h-16 text-gray-700 ${customClass.input ?? ''}`,
        }}
      />
      <Button
        customClass={`px-7 rounded-l-none ${customClass.button ?? ''}`}
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.SOLID}
        onClick={onSearch}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default memo(SearchBox);
