import { StarRating } from '@/icons';
import { IProductProps } from '@/interfaces/product';
import Image from 'next/image';

export const ProductCard = ({
  id,
  name,
  image,
  price,
  originalPrice,
  discount,
  label = 'Hot',
  rating = 4,
}: IProductProps) => {
  return (
    <div
      key={id}
      className="relative  flex flex-col gap-1 items-center justify-between p-4 rounded-sm border-2 border-secondary-200 hover:shadow-lg transition-shadow"
    >
      {label && (
        <div className="absolute top-2 left-2 bg-danger-50 text-white text-xs font-semibold px-2 py-1 rounded-md">
          {label}
        </div>
      )}
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
        className="rounded-md w-full object-cover"
      />
      <h3 className="text-lg font-semibold text-indigo text-center">{name}</h3>
      <StarRating size={14} rating={rating} />
      <div className="flex items-center space-x-2">
        <span className="text-primary-200 font-medium text-lg">{price}</span>
        {originalPrice && (
          <span className="text-gray-400 line-through text-sm">
            {originalPrice}
          </span>
        )}
        {discount && (
          <span className="text-danger-50 text-sm font-semibold">
            {discount}
          </span>
        )}
      </div>
    </div>
  );
};
