// Libraries
import { notFound } from 'next/navigation';

// Services
import { getProducts, getProductById } from '@/services';

// Component
import { ProductCard } from '@/components';

// Types
import type { IProductProps } from '@/interfaces';

// Todo: Optimize to limit fetching twice in 1 components
export async function RelatedProducts({
  currentProductId,
}: {
  currentProductId?: string;
}) {
  const currentProduct = await getProductById(currentProductId ?? '1');

  if (!currentProduct) {
    return notFound();
  }

  const currentCategory = currentProduct.category;
  const response = await getProducts({
    page: 1,
    limit: 4,
    filter: { category: currentCategory ?? 'beauty' },
  });

  const relatedProducts = response.filter(
    (product: IProductProps) => product.id !== currentProductId,
  );

  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedProducts.length !== 0 ? (
        relatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p>No related products found.</p>
      )}
    </div>
  );
}
