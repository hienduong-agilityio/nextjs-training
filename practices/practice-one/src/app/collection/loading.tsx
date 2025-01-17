// UI
import { LoadingFilterSortBar, LoadingProductCard } from '@/ui';

export default function LoadingCollectionPage() {
  return (
    <div className="col-span-12 md:col-span-8 lg:col xl:col-span-9 2xl:col-span-10 w-full">
      <LoadingFilterSortBar />
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
            {[...Array(5)].map((_) => (
              <div key={_} className="w-12 h-12 bg-gray-200 animate-pulse " />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
