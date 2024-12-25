// Components
import { QuantityControl } from '@/ui';
import { Button } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

// Constants
import { DEFAULT_MAX_QUANTITY, ROUTE } from '@/constants';

// Interfaces
import { ICartItem } from '@/interfaces';

/**
 * TODO:
 * - Handle delete product and show toast message
 * - Handle update product and show toast message
 */
export const CartItemRow = ({
  id,
  thumbnail = `/images/image-placeholder.svg`,
  quantity = 1,
  title = 'Product',
  price = 0,
  total = 0,
}: ICartItem) => {
  return (
    <tr>
      <td className="flex items-center px-4 py-8 w-max">
        <Button
          aria-label="Remove product"
          className="p-2 mr-4 text-danger-300"
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
        <Link href={`${ROUTE.PRODUCT}/${id}`} className="ml-4 hover:underline">
          {title}
        </Link>
      </td>
      <td className="px-4 py-8 text-start">${price}</td>
      <td className="flex items-center justify-start w-1/4 px-4 py-8 space-x-2">
        <QuantityControl
          initialQuantity={quantity}
          maxQuantity={DEFAULT_MAX_QUANTITY}
        />
      </td>
      <td className="px-4 py-8 text-start">${total.toFixed(2)}</td>
    </tr>
  );
};
