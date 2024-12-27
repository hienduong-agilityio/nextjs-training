import type { IIconProps } from '@/interfaces';
import { Start } from './StartIcon';

export const StarRating = ({ size = 44, rating = 3 }: IIconProps) => {
  const validatedRating = Math.round(rating);

  return (
    <div className="flex gap-2 space-x-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <Start key={index} size={size} isStarred={index <= validatedRating} />
      ))}
    </div>
  );
};
