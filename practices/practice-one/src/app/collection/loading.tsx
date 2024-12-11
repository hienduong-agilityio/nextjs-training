// UI
import { LoadingProductCard } from '@/ui';

export default function LoadingCollectionPage() {
  return (
    <div className="flex flex-col gap-9">
      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-6 w-full">
        {[...Array(6)].map((_) => (
          <LoadingProductCard key={_} />
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="w-full bg-secondary-300 flex flex-col items-center">
        <div className="flex items-center space-x-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-12 h-12 bg-gray-200 animate-pulse " />
          ))}
        </div>
      </div>
    </div>
  );
}
