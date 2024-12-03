import { LoadingProductTabs, LoadingRelatedProducts } from '@/ui';

export default function LoadingProductDetailsPage() {
  return (
    <div>
      <section className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 md:gap-16 lg:gap-32 lg:grid-cols-2">
          {/* Left Section - Images */}
          <div className="grid gap-6">
            <div className="w-full h-[300px] sm:h-[400px] bg-gray-200 animate-pulse rounded-md" />
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              <div className="w-full h-[100px] sm:h-[120px] bg-gray-200 animate-pulse rounded-md" />
              <div className="w-full h-[100px] sm:h-[120px] bg-gray-200 animate-pulse rounded-md" />
              <div className="w-full h-[100px] sm:h-[120px] bg-gray-200 animate-pulse rounded-md" />
              <div className="w-full h-[100px] sm:h-[120px] bg-gray-200 animate-pulse rounded-md" />
            </div>
          </div>

          {/* Right Section - Details */}
          <div className="space-y-6">
            <div>
              <div className="w-3/4 h-8 bg-gray-200 animate-pulse rounded-md" />
              <div className="flex mt-3 items-center gap-4 pb-3 border-b-2 border-gray-300">
                <div className="w-24 h-6 bg-gray-200 animate-pulse rounded-md" />
                <div className="w-16 h-6 bg-gray-200 animate-pulse rounded-md" />
                <div className="w-24 h-6 bg-gray-200 animate-pulse rounded-md" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-24 h-8 bg-gray-200 animate-pulse rounded-md" />
              <div className="w-16 h-6 bg-gray-200 animate-pulse rounded-md" />
              <div className="w-16 h-6 bg-gray-200 animate-pulse rounded-md" />
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              {[...Array(3)].map((_) => (
                <div
                  key={_}
                  className="flex w-1/2 justify-between items-center"
                >
                  <div className="w-24 h-6 bg-gray-200 animate-pulse rounded-md" />
                  <div className="w-32 h-6 bg-gray-200 animate-pulse rounded-md" />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-between gap-4 md:flex-row py-5 border-y-2 border-gray-300">
              <div className="w-1/4 h-12 bg-gray-200 animate-pulse rounded-md" />
              <div className="flex gap-4">
                <div className="w-24 h-12 bg-gray-200 animate-pulse rounded-md" />
                <div className="w-12 h-12 bg-gray-200 animate-pulse rounded-md" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2 h-12 bg-gray-200 animate-pulse rounded-md" />
              <div className="w-1/2 h-12 bg-gray-200 animate-pulse rounded-md" />
            </div>
          </div>
        </div>
      </section>

      <LoadingProductTabs />

      <LoadingRelatedProducts />
    </div>
  );
}
