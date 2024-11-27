// Libraries
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

// Types
import type { SelectHTMLAttributes } from 'react';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  defaultValue?: string;
  customClass?: string;
}

const baseClass =
  'border text-sm rounded px-3 py-2 transition duration-200 ease-in-out focus:ring-2 focus:outline-none';

const Select = ({
  options,
  defaultValue,
  customClass = '',
  onChange,
  ...rest
}: ISelectProps): JSX.Element => {
  const combinedClasses = twMerge(
    classNames(
      baseClass,
      'border-gray-300 hover:border-gray-400 focus:ring-gray-300',
    ),
    customClass,
  );

  return (
    <select
      className={combinedClasses}
      onChange={(e) => onChange && onChange(e)}
      defaultValue={defaultValue}
      {...rest}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default memo(Select);
