import { Start } from './StartIcon';

interface StarRatingProps {
  size?: number;
  rating: number;
}

export const StarRating = ({ size = 44, rating = 3 }: StarRatingProps) => {
  const validatedRating = Math.max(0, Math.min(rating, 5));

  return (
    <div className="flex gap-2 space-x-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <Start key={index} size={size} isStarred={index <= validatedRating} />
      ))}
    </div>
  );
};
