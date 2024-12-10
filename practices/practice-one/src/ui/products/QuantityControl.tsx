'use client';

import { Button } from '@/components';
import { useQuantityControl } from '@/hooks/useQuantityControl';

export interface IQuantityControlProps {
  productId: string;
  userId: number;
}

export default function QuantityControl({
  productId,
  userId,
}: IQuantityControlProps) {
  const { quantity, isLoading, increment, decrement, handleInputChange } =
    useQuantityControl({ productId, userId });

  if (isLoading) {
    return <div className="text-gray-500">Loading...</div>;
  }

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
