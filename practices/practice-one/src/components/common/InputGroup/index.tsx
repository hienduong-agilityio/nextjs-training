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
  startIcon,
  isDisabled = false,
  customClass = {},
  onSubmit,
}: IInputGroupProps) => {
  return (
    <form onSubmit={onSubmit} className={`flex ${customClass.container ?? ''}`}>
      <InputField
        placeholder={placeholder}
        name="searchBox"
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
        customClass={`px-7 rounded-l-none hidden lg:block font-semibold shadow-none ${customClass.button ?? ''}`}
        disabled={isDisabled}
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default InputGroup;
