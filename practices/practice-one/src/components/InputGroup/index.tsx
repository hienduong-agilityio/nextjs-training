// Components
import { Button, InputField } from '@/components';

// Enums
import { BUTTON_COLORS, BUTTON_VARIANTS } from '@/enums';

export interface IInputGroupProps {
  placeholder?: string;
  buttonText?: string;
  isDisabled?: boolean;
  startContent?: React.ReactNode;
  customClass?: {
    container?: string;
    inputContainer?: string;
    input?: string;
    button?: string;
  };
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
  value?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputGroup = ({
  value,
  placeholder = 'Enter your query...',
  buttonText = 'Search',
  startContent,
  isDisabled = false,
  customClass = {},
  onInputChange,
  onButtonClick,
  onKeyDown,
}: IInputGroupProps) => {
  return (
    <div className={`flex ${customClass.container ?? ''}`}>
      <InputField
        placeholder={placeholder}
        startContent={startContent}
        value={value}
        type="search"
        id="gsearch"
        name="gsearch"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        customClass={{
          container: `border-blue-300 lg:rounded-r-none ${customClass.inputContainer ?? ''}`,
          input: `h-14 text-gray-700 appearance-none [&::-webkit-search-cancel-button]:cursor-pointer
          ${isDisabled ? 'cursor-not-allowed' : ''} ${customClass.input ?? ''}`,
        }}
        disabled={isDisabled}
      />
      <Button
        customClass={`px-7 rounded-l-none hidden lg:block font-semibold shadow-none ${
          isDisabled ? 'cursor-not-allowed' : ''
        } ${customClass.button ?? ''}`}
        type="button"
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.SOLID}
        onClick={onButtonClick}
        disabled={isDisabled}
      >
        {buttonText}
      </Button>
    </div>
  );
};
