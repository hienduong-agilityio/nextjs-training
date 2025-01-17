// Components
import { Button, InputField } from '@/components';

// Enums
import { BUTTON_COLORS } from '@/enums';

// Types
import type { IInputGroupProps } from '@/interfaces';

const InputGroup = ({
  value,
  placeholder = 'Enter your query...',
  buttonText = 'Search',
  inputName = 'inputField',
  isDisabled = false,
  isLoading = false,
  startIcon,
  customClass = {},
  onSubmit,
}: IInputGroupProps) => {
  return (
    <form
      aria-label="Input Group"
      onSubmit={onSubmit}
      className={`flex ${customClass.container ?? ''}`}
    >
      <InputField
        key={value === '' ? 'empty' : 'filled'}
        placeholder={placeholder}
        name={inputName}
        defaultValue={value}
        startIcon={startIcon}
        customClass={{
          container: `border-blue-300 lg:rounded-r-none ${customClass.inputContainer ?? ''}`,
          input: `h-14 text-gray-700 appearance-none ${customClass.input ?? ''}`,
        }}
        disabled={isDisabled}
      />
      <Button
        color={BUTTON_COLORS.PRIMARY}
        type="submit"
        aria-busy={isLoading}
        isLoading={isLoading}
        customClass="px-7 rounded-l-none hidden lg:flex font-semibold shadow-none"
        disabled={isLoading || isDisabled}
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default InputGroup;
