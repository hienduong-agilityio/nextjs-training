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
}: IInputGroupProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onButtonClick?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex ${customClass.container ?? ''}`}
    >
      <InputField
        placeholder={placeholder}
        startIcon={startIcon}
        value={value}
        onChange={onInputChange}
        customClass={{
          container: `border-blue-300 lg:rounded-r-none ${customClass.inputContainer ?? ''}`,
          input: `h-14 text-gray-700 appearance-none ${customClass.input ?? ''}`,
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
    </form>
  );
};
