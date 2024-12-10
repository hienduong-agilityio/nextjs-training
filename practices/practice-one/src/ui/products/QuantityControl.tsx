'use client';

// Libraries
import { useState } from 'react';

// Components
import { Button } from '@/components';

export interface IQuantityControlProps {
  initialQuantity: number;
  maxQuantity: number;
}

export default function QuantityControl({
  initialQuantity,
  maxQuantity,
}: IQuantityControlProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    setQuantity((prev) => Math.min(maxQuantity, prev + 1));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleInputChange = (value: string) => {
    const numericValue = parseInt(value, 10);

    setQuantity(Math.min(maxQuantity, Math.max(1, numericValue || 1)));
  };

  return (
    <div className="flex items-center gap-4 bg-secondary-50">
      <div className="flex items-center border border-gray-300 rounded-lg">
        <Button
          className="px-5 py-3 text-primary-100 hover:text-gray-800"
          onClick={decrement}
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
          className="px-5 py-3 text-primary-100 hover:text-gray-800"
          onClick={increment}
        >
          +
        </Button>
      </div>
    </div>
  );
}
