// Libraries
import { memo } from 'react';

// Interfaces
import { IProductProps } from '@/interfaces';

// Icons
import { StarRating } from '@/icons';

// Components
import Image from 'next/image';
import Link from 'next/link';

// Constants
import { ROUTE } from '@/constants';

// UI
import { CartAndFavoriteActions } from '@/ui';

const ProductCard = ({
  id,
  name = 'Product',
  images = [],
  price = 100,
  originalPrice = 50,
  discount = '50%',
  label = 'Hot',
  rating = 4,
}: IProductProps) => {
  const image = images.length > 0 ? images[0] : '/images/image-placeholder.svg';

  return (
    <div
      key={id}
      className="relative flex flex-col transition-shadow border-2 rounded-sm border-secondary-200 hover:shadow-lg"
    >
      {label && (
        <span className="absolute top-0 left-0 z-20 px-3 py-1 text-xs text-white uppercase rounded-sm bg-danger-200">
          {label}
        </span>
      )}
      <div className="relative bg-secondary-200 group">
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          className="mix-blend-multiply object-contain h-[273px] w-[200px] sm:w-[300px] sm:h-[273px] mx-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover Buttons */}
        <CartAndFavoriteActions productId={id} variant="card" />
      </div>
      <div className="flex flex-col items-center justify-between h-full px-4 py-4 bg-white">
        <Link
          href={`${ROUTE.PRODUCT}/${id}`}
          className="text-lg font-semibold text-center text-indigo hover:underline"
        >
          {name}
        </Link>
        <StarRating size={14} rating={rating} />
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-primary-200">${price}</span>
          <span className="text-sm text-gray-400 line-through">
            ${originalPrice}
          </span>
          {discount && (
            <span className="text-sm font-semibold text-danger-50">
              ${discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
