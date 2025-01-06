import { StarRating } from '@/icons';
import { IProductReview } from '@/interfaces';

export function ProductReviews({
  reviews = [],
}: {
  reviews: IProductReview[];
}) {
  if (!reviews.length) {
    return (
      <p className="text-center text-gray-600 text-base md:text-lg">
        No reviews yet. Be the first to write one!
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div
          key={review.reviewerName}
          className="border-b border-gray-200 pb-6 last:border-none "
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-800">
              {review.reviewerName}
            </h4>
            <span className="text-sm text-gray-500 mt-1 sm:mt-0">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">{review.reviewerEmail}</p>
          <div className="mt-3 flex items-center">
            <StarRating size={16} rating={review.rating} />
          </div>
          <p className="mt-4 text-gray-700 text-base leading-relaxed">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
}
