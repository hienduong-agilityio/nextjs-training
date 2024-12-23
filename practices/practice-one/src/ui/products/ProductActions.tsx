'use client';

import { useState } from 'react';

// UI
import { CartAndFavoriteActions, QuantityControl } from '@/ui';

interface ProductActionsProps {
  productId: string;
  maxQuantity: number;
  initialQuantity: number;
}

export function ProductActions({
  productId,
  maxQuantity,
  initialQuantity,
}: ProductActionsProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-4 mt-4 md:flex-row py-6 border-y-2 border-secondary-100">
      {/* Quantity Control */}
      <QuantityControl
        initialQuantity={quantity}
        maxQuantity={maxQuantity}
        onQuantityChange={handleQuantityChange}
      />

      {/* Cart and Favorite Actions */}
      <CartAndFavoriteActions productId={productId} quantity={quantity} />
    </div>
  );
}
