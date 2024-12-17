// Libraries
import { memo } from 'react';

// Components
import { Button } from '@/components';
import { QuantityControl } from '@/ui';
import Image from 'next/image';
import Link from 'next/link';

interface ICartItemProps {
  product: {
    id: string;
    title: string;
    price: number;
    quantity: number;
    total: number;
    thumbnail: string;
  };
}

const CartItem = ({ product }: ICartItemProps) => {
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
          src={product.thumbnail}
          alt={product.title}
          width={90}
          height={60}
          className="rounded border w-[90px] h-[60px] object-contain bg-secondary-50"
        />
        <Link
          href={`/product/${product.id}`}
          className="ml-4 hover:underline w-max"
        >
          {product.title}
        </Link>
      </td>
      <td className="px-4 py-8 text-center">${product.price}</td>
      <td className="px-4 py-8 flex justify-center items-center space-x-2">
        <QuantityControl />
      </td>
      <td className="px-4 py-8 text-center">${product.total}</td>
    </tr>
  );
};

export default memo(CartItem);
