import { LoadingProductCard } from './LoadingProductCard';

export function LoadingRelatedProducts() {
  return (
    <section className="flex flex-col items-center gap-4 mt-8 md:mt-16 lg:mt-32">
      <h2 className="text-3xl font-semibold uppercase">Related products</h2>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_) => (
          <LoadingProductCard key={_} />
        ))}
      </div>
    </section>
  );
}
