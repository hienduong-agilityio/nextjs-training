'use client';

// Libraries
import { useState } from 'react';

// Icons
import { AddToCartIcon, HeartIcon, Spinner } from '@/icons';

// Components
import { Button, IconButton } from '@/components';

// Services
import { handleAddToCart } from '@/actions/cartActions';

interface CartAndFavoriteActionsProps {
  productId: string;
  quantity?: number;
  variant?: 'default' | 'card';
  addToFavorites?: () => void;
}

export const CartAndFavoriteActions = ({
  productId,
  quantity = 1,
  variant = 'default',
  addToFavorites = () => {},
}: CartAndFavoriteActionsProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCartClick = async () => {
    setIsLoading(true);

    try {
      await handleAddToCart(134, productId, quantity);
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'card') {
    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 mx-3 my-5 transition-opacity duration-300 bg-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto focus-within:opacity-100 focus-within:pointer-events-auto">
        {/* Favorite Button */}
        <IconButton
          aria-label="Favorite product"
          disabled={isLoading}
          customClass={`flex p-2 shadow-none cursor-not-allowed text-sm font-medium bg-indigo-600 border-2 rounded-full text-primary-100 border-primary-100 ${
            isLoading ? 'opacity-50 ' : 'opacity-100'
          }`}
          onClick={addToFavorites}
        >
          <HeartIcon size={24} />
        </IconButton>

        {/* Add to Cart Button */}
        <IconButton
          aria-label="Add to Cart"
          disabled={isLoading}
          className={`p-2 text-sm font-medium bg-indigo-600 border-2 rounded-full text-primary-100 border-primary-100 transition-opacity ${
            isLoading ? 'opacity-50 cursor-wait' : 'opacity-100 cursor-pointer'
          }`}
          onClick={handleAddToCartClick}
        >
          <AddToCartIcon size={24} />
        </IconButton>
      </div>
    );
  }

  return (
    <div className="flex gap-3 xl:gap-5">
      {/* Add to Cart Button */}
      <Button
        startIcon={
          isLoading ? (
            <Spinner size={20} color="currentColor" />
          ) : (
            <AddToCartIcon
              size={20}
              color="currentColor"
              className="text-primary-100 group-hover:text-white transition-colors duration-200"
            />
          )
        }
        customClass="group shadow-none bg-primary-50 text-primary-100 disabled:hover:text-primary-100 disabled:hover:bg-primary-50 hover:bg-primary-100 hover:text-white transition-all duration-200 whitespace-nowrap"
        onClick={handleAddToCartClick}
        disabled={isLoading}
      >
        Add To Cart
      </Button>

      {/* Favorite Button */}
      <Button disabled customClass="group shadow-none p-4 bg-primary-50">
        <HeartIcon
          size={24}
          color="currentColor"
          className="text-primary-100 transition-colors duration-200"
        />
      </Button>
    </div>
  );
};
