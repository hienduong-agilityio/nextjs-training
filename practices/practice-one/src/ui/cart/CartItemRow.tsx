// Components
import { QuantityControl } from '@/ui';
import { Button } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

// Constants
import { ROUTE } from '@/constants';

// Interfaces
import { ICartItem } from '@/interfaces';

export const CartItemRow = ({
  id,
  thumbnail = `/images/image-placeholder.svg`,
  title = 'Product',
  price = 0,
  total = 0,
}: ICartItem) => {
  return (
    <tr>
      <td className="px-4 py-8 flex items-center">
        <Button
          aria-label="Remove product"
          className="text-danger-300  p-2 mr-4"
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
          className="ml-4 hover:underline w-max"
        >
          {title}
        </Link>
      </td>
      <td className="px-4 py-8 text-start">${price}</td>
      <td className="px-4 py-8 flex justify-start w-1/4 items-center space-x-2">
        <QuantityControl />
      </td>
      <td className="px-4 py-8 text-start">${total}</td>
    </tr>
  );
};
