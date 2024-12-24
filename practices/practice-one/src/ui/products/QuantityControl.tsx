'use client';

// Libraries
import { useState } from 'react';

// Components
import { Button } from '@/components';

export interface IQuantityControlProps {
  initialQuantity: number;
  maxQuantity: number;
  onQuantityChange?: (quantity: number) => void;
}

export function QuantityControl({
  initialQuantity,
  maxQuantity,
  onQuantityChange,
}: IQuantityControlProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const changeQuantity = (delta: number) => {
    updateQuantity(Math.min(maxQuantity, Math.max(1, quantity + delta)));
  };

  const handleInputChange = (value: string) => {
    const numericValue = parseInt(value, 10) || 1;

    updateQuantity(Math.min(maxQuantity, Math.max(1, numericValue)));
  };

  const handleDecrement = () => changeQuantity(-1);
  const handleIncrement = () => changeQuantity(1);

  return (
    <div className="rounded-md gap-4 bg-secondary-50">
      <div className="flex">
        <Button
          className="px-5 py-3 text-primary-100 hover:text-gray-800 disabled:cursor-not-allowed disabled:text-gray-800"
          disabled={quantity === 1}
          onClick={handleDecrement}
        >
          -
        </Button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-12 text-center border-0 bg-gray-50 focus:ring-0"
        />
        <Button
          className="px-5 py-3 text-primary-100 hover:text-gray-800 disabled:cursor-not-allowed disabled:text-gray-800"
          disabled={quantity === maxQuantity}
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
    </div>
  );
}
