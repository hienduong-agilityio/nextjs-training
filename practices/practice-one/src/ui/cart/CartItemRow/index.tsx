'use client';

// Libraries
import { memo, useTransition, useState } from 'react';

// Components
import { QuantityControl } from '@/ui';
import { Button } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

// Actions
import {
  handleDeleteProductFromCart,
  handleUpdateProductInCart,
} from '@/actions';

// Store
import { ToastStore } from '@/stores';

// Constants
import {
  DEFAULT_MAX_QUANTITY,
  DEFAULT_USER_ID,
  ROUTE,
  TOAST_MESSAGES,
  STATUS_TYPES,
} from '@/constants';

// Interfaces
import { ICartItem } from '@/interfaces';

// Hooks
import { useDebouncedCallback } from '@/hooks';

const CartItemRow = ({
  id,
  thumbnail = `/images/image-placeholder.svg`,
  quantity = 1,
  title = 'Product',
  price = 0,
}: ICartItem) => {
  const [isLoading, startTransition] = useTransition();
  const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);

  const { showToast } = ToastStore();

  const handleRemoveClick = () => {
    startTransition(async () => {
      try {
        const success = await handleDeleteProductFromCart({
          userId: DEFAULT_USER_ID,
          productId: id,
        });

        const toastMessage = success
          ? TOAST_MESSAGES.DELETE_SUCCESS
          : TOAST_MESSAGES.DELETE_FAILED;

        const toastType = success ? STATUS_TYPES.SUCCESS : STATUS_TYPES.ERROR;

        showToast(toastMessage, toastType);
      } catch (error) {
        showToast(TOAST_MESSAGES.API_ERROR, STATUS_TYPES.ERROR);
      }
    });
  };

  const updateQuantity = useDebouncedCallback((newQuantity: number) => {
    startTransition(async () => {
      try {
        await handleUpdateProductInCart({
          userId: DEFAULT_USER_ID,
          productId: id,
          newQuantity,
        });
      } catch (error) {
        showToast(TOAST_MESSAGES.API_ERROR, STATUS_TYPES.ERROR);
        setOptimisticQuantity(quantity);
      }
    });
  }, 1000);

  const handleQuantityChange = (newQuantity: number) => {
    setOptimisticQuantity(newQuantity);
    updateQuantity(newQuantity);
  };

  return (
    <tr>
      <td className="flex items-center px-4 py-8 w-max">
        {/* Remove Button */}
        <Button
          aria-label="Remove product"
          className={`p-2 mr-4 text-danger-300 ${
            isLoading ? 'cursor-wait' : ''
          }`}
          onClick={handleRemoveClick}
          disabled={isLoading}
        >
          &times;
        </Button>
        <Image
          src={thumbnail}
          alt={title}
          width={90}
          height={60}
          className="rounded border w-[90px] h-[60px] object-contain bg-secondary-50"
        />
        <Link
          href={`${ROUTE.PRODUCT}/${id}`}
          className={`ml-4 hover:underline ${
            isLoading ? 'pointer-events-none' : ''
          }`}
        >
          {title}
        </Link>
      </td>
      <td className="px-4 py-8 text-start">${price}</td>
      <td className="flex items-center justify-start w-1/4 px-4 py-8 space-x-2">
        <QuantityControl
          initialQuantity={optimisticQuantity}
          maxQuantity={DEFAULT_MAX_QUANTITY}
          onQuantityChange={handleQuantityChange}
        />
      </td>
      <td className="px-4 py-8 text-start">
        ${(price * optimisticQuantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default memo(CartItemRow);
