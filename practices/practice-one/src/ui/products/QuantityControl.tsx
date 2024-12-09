'use client';

// Libraries
import { useState } from 'react';

// Components
import { Button } from '@/components';

export const QuantityControl = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

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
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
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
};