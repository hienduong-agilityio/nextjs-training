'use client';

// Libraries
import { memo } from 'react';

// Interfaces
import { IProductProps } from '@/interfaces';

// Icons
import { HeartIcon, StarRating, AddToCartIcon } from '@/icons';

// Components
import Image from 'next/image';
import { Button } from '@/components';

interface IProductCardProps extends IProductProps {
  onFavorite?: () => void;
  onAddToCart?: () => void;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  originalPrice,
  discount,
  label = 'Hot',
  rating = 4,
  onFavorite = () => {},
  onAddToCart = () => {},
}: IProductCardProps) => {
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
          className="mix-blend-multiply"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        {/* Hover Buttons */}
        <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 transition-opacity duration-300 bg-white bg-opacity-95 opacity-0 mx-3 my-5 group-hover:opacity-100">
          <Button
            aria-label="Favorite product"
            className="text-sm font-medium text-primary-100 border-2 flex  border-primary-100 bg-indigo-600 rounded-full"
            onClick={onFavorite}
          >
            <HeartIcon size={35} />
          </Button>
          <Button
            aria-label="Add to Cart"
            className="text-sm font-medium text-primary-100 border-2 border-primary-100 bg-indigo-600 rounded-full"
            onClick={onAddToCart}
          >
            <AddToCartIcon size={35} />
          </Button>
        </div>
      </div>
      {/* Product Details */}
      <div className="flex flex-col items-center justify-between h-full px-4 py-4 bg-white">
        <h3 className="text-lg font-semibold text-center text-indigo">
          {name}
        </h3>
        <StarRating size={14} rating={rating} />
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-primary-200">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice}
            </span>
          )}
          {discount && (
            <span className="text-sm font-semibold text-danger-50">
              {discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
