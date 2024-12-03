// Icons
import { StarRating } from '@/icons';

// Services
import { getProductById } from '@/services';

// Components
import Link from 'next/link';

export async function ProductInfo({ productId }: { productId: string }) {
  const productData = await getProductById(productId);

  // Simplified rounding of rating
  const roundedRating = Math.round(productData.rating as number);

  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
        {productData.name}
      </h2>

      <div className="flex items-center gap-4 pb-3 border-b-2 border-secondary-1000">
        {/* Use roundedRating for the StarRating component */}
        <StarRating size={16} rating={roundedRating} />
        <span className="text-secondary-500">
          {productData.reviews?.length ?? 0} reviews
        </span>
        <Link href="#" className="text-sm text-primary-100 hover:underline">
          Submit a review
        </Link>
      </div>

      <div className="flex items-center gap-4 py-4">
        <span className="text-2xl font-bold text-primary-200">
          ${productData.price}
        </span>
        <span className="text-lg text-gray-500 line-through">
          ${productData.originalPrice}
        </span>
        <span className="text-lg font-bold text-danger-50">
          {productData.discount} % Off
        </span>
      </div>

      <div className="md:w-1/2 space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span className="font-medium">Availability:</span>
          <span className="capitalize">{productData.availabilityStatus}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Category:</span>
          <span className="capitalize">{productData.category}</span>
        </div>
        <p className="font-medium">{productData.shippingInformation}</p>
      </div>
    </>
  );
}
