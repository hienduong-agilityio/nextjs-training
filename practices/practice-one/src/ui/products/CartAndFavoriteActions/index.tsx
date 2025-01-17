'use client';

// Libraries
import { useState } from 'react';

// Icons
import { AddToCartIcon, HeartIcon } from '@/icons';

// Components
import { Button, IconButton } from '@/components';

// Services
import { handleAddToCart } from '@/actions';

// Store
import { ToastStore } from '@/stores';

// Constants
import {
  DEFAULT_MAX_QUANTITY,
  DEFAULT_USER_ID,
  TOAST_MESSAGES,
  STATUS_TYPES,
} from '@/constants';

// Enums
import { BUTTON_COLORS } from '@/enums';

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
  const { showToast } = ToastStore();

  const handleAddToCartClick = async () => {
    setIsLoading(true);

    try {
      const success = await handleAddToCart({
        userId: DEFAULT_USER_ID,
        payload: {
          productId: productId,
          quantity: quantity,
          maxQuantity: DEFAULT_MAX_QUANTITY,
        },
      });

      const toastMessage = success
        ? TOAST_MESSAGES.ADD_SUCCESS
        : TOAST_MESSAGES.ADD_MAX_QUANTITY;

      const toastType = success ? STATUS_TYPES.SUCCESS : STATUS_TYPES.ERROR;

      showToast(toastMessage, toastType);
    } catch (error) {
      showToast(TOAST_MESSAGES.ADD_FAILED, STATUS_TYPES.ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'card') {
    return (
      <div
        aria-label="Cart and Favorite Actions"
        className="absolute inset-0 z-10 flex items-center justify-center gap-4 mx-3 my-5 transition-opacity duration-300 bg-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto focus-within:opacity-100 focus-within:pointer-events-auto"
      >
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
    <div aria-label="Cart and Favorite Actions" className="flex gap-3 xl:gap-5">
      {/* Add to Cart Button */}
      <Button
        aria-label="Add to Cart"
        startIcon={
          <AddToCartIcon
            size={20}
            color="currentColor"
            className="text-primary-100 group-hover:text-white transition-colors duration-200"
          />
        }
        color={BUTTON_COLORS.PRIMARY}
        isLoading={isLoading}
        customClass="group shadow-none bg-primary-50 text-primary-100 disabled:hover:text-primary-100 disabled:hover:bg-primary-50 hover:bg-primary-100 hover:text-white transition-all duration-200 whitespace-nowrap"
        onClick={handleAddToCartClick}
      >
        Add To Cart
      </Button>

      {/* Favorite Button */}
      <Button
        aria-label="Favorite product"
        disabled
        customClass="group shadow-none p-4 bg-primary-50"
      >
        <HeartIcon
          size={24}
          color="currentColor"
          className="text-primary-100 transition-colors duration-200"
        />
      </Button>
    </div>
  );
};
