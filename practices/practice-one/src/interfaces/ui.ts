export interface IInputGroupProps {
  placeholder?: string;
  value?: string;
  buttonText?: string;
  inputName?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  customClass?: {
    container?: string;
    inputContainer?: string;
    input?: string;
    button?: string;
  };
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
