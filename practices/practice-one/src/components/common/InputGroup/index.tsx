// Components
import { Button, InputField } from '@/components';

// Enums
import { BUTTON_COLORS } from '@/enums';

export interface IInputGroupProps {
  placeholder?: string;
  value?: string;
  buttonText?: string;
  isDisabled?: boolean;
  startIcon?: React.ReactNode;
  customClass?: {
    container?: string;
    inputContainer?: string;
    input?: string;
    button?: string;
  };
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputGroup = ({
  value,
  placeholder = 'Enter your query...',
  buttonText = 'Search',
  startIcon,
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
        startIcon={startIcon}
        value={value}
        type="search"
        id="gsearch"
        name="gsearch"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        customClass={{
          container: `border-blue-300 lg:rounded-r-none ${customClass.inputContainer ?? ''}`,
          input: `h-14 text-gray-700 appearance-none [&::-webkit-search-cancel-button]:cursor-pointer ${customClass.input ?? ''}`,
        }}
        disabled={isDisabled}
      />
      <Button
        color={BUTTON_COLORS.PRIMARY}
        customClass={`px-7 rounded-l-none hidden lg:block font-semibold shadow-none ${customClass.button ?? ''}`}
        onClick={onButtonClick}
        disabled={isDisabled}
      >
        {buttonText}
      </Button>
    </div>
  );
};
