// Libraries
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

// Types
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  customClass?: {
    container?: string;
    input?: string;
  };
  errorMessage?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

const baseInputClass: string = 'flex-1 outline-none px-3 py-2 bg-transparent';
const baseContainerClass: string =
  'flex items-center gap-1 px-3 border rounded-md focus-within:ring-2';
const errorContainerClass: string =
  'border-danger-200 focus-within:ring-danger-200';
const normalContainerClass: string =
  'border-gray-300 focus-within:ring-primary-100';
const errorMessagesClasses: string = 'text-sm text-danger-200';

/**
 * InputField component
 *
 * @returns {JSX.Element} - InputField element.
 */
const InputField = ({
  customClass: customClassNames = {},
  errorMessage = '',
  startContent = null,
  endContent = null,
  value,
  onChange,
  ...restProps
}: IInputProps): JSX.Element => {
  const containerClasses = twMerge(
    classNames(
      baseContainerClass,
      errorMessage ? errorContainerClass : normalContainerClass,
      customClassNames.container,
    ),
  );

  const inputClass = twMerge(baseInputClass, customClassNames.input);

  return (
    <div>
      <div className={containerClasses}>
        {startContent && <span>{startContent}</span>}
        <input
          className={inputClass}
          value={value}
          onChange={onChange}
          {...restProps}
        />
        {endContent && <span>{endContent}</span>}
      </div>
      {errorMessage && (
        <span className={errorMessagesClasses}>{errorMessage}</span>
      )}
    </div>
  );
};

export default memo(InputField);
