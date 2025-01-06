import { LoadingProductCard } from './LoadingProductCard';

export function LoadingRelatedProducts() {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_) => (
        <LoadingProductCard key={_} />
      ))}
    </div>
  );
}