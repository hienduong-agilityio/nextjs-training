'use client';

// Libraries
import { useState } from 'react';

// Components
import { Button } from '@/components';

export interface IQuantityControlProps {
  initialQuantity: number;
  maxQuantity: number;
  isLoading?: boolean;
  onQuantityChange?: (quantity: number) => void;
}

export function QuantityControl({
  initialQuantity = 1,
  maxQuantity = 10,
  isLoading = false,
  onQuantityChange = () => {},
}: IQuantityControlProps) {
  const [inputValue, setInputValue] = useState(initialQuantity);

  const updateQuantity = (newQuantity: number) => {
    const clampedValue = Math.min(maxQuantity, Math.max(1, newQuantity));

    onQuantityChange?.(clampedValue);
    setInputValue(clampedValue);
  };

  const handleInputChange = (value: string) => {
    setInputValue(Number(value));
  };

  const handleBlur = () => {
    const numericValue = inputValue;

    updateQuantity(numericValue);
  };

  const handleDecrement = () => updateQuantity(inputValue - 1);
  const handleIncrement = () => updateQuantity(inputValue + 1);

  return (
    <div
      aria-label="Quantity Control"
      className="rounded-md gap-4 bg-secondary-50"
    >
      <div className="flex">
        <Button
          aria-label="decrement"
          className="px-5 py-3 text-primary-100 hover:text-gray-800 disabled:cursor-not-allowed disabled:text-gray-800"
          disabled={inputValue === 1}
          onClick={handleDecrement}
        >
          -
        </Button>
        <input
          aria-label="Quantity input"
          type="number"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={handleBlur}
          className="w-12 text-center border-0 bg-gray-50 focus:ring-0"
          disabled={isLoading}
        />
        <Button
          aria-label="increment"
          className="px-5 py-3 text-primary-100 hover:text-gray-800 disabled:cursor-not-allowed disabled:text-gray-800"
          disabled={inputValue === maxQuantity}
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
    </div>
  );
}
