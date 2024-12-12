'use client';

// Libraries
import { useState } from 'react';

// Icons
import { AddToCartIcon, HeartIcon } from '@/icons';

// Components
import { Button } from '@/components';

// Services
import { handleAddToCart } from '@/actions/cartActions';

interface CartAndFavoriteActionsProps {
  productId: string;
  quantity: number;
}

export const CartAndFavoriteActions = ({
  productId,
  quantity,
}: CartAndFavoriteActionsProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async () => {
    setIsLoading(true);
    try {
      await handleAddToCart(134, productId, quantity);
      alert('Product added to cart successfully!');
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-3 xl:gap-5">
      {/* Add to Cart Button */}
      <Button
        startIcon={
          <AddToCartIcon
            size={20}
            color="currentColor"
            className="text-primary-100 group-hover:text-white transition-colors duration-200"
          />
        }
        customClass="group flex items-center justify-center shadow-none bg-primary-50 text-primary-100 hover:bg-primary-100 hover:text-white transition-all duration-200 whitespace-nowrap"
        onClick={handleAdd}
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : 'Add To Cart'}
      </Button>

      {/* Favorite Button */}
      <Button customClass="group flex items-center justify-center shadow-none p-4 bg-primary-50 hover:bg-danger-50 transition-all duration-200">
        <HeartIcon
          size={24}
          color="currentColor"
          className="text-primary-100 group-hover:text-white transition-colors duration-200"
        />
      </Button>
    </div>
  );
};
