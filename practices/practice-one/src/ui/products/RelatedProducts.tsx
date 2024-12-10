'use client';

// Libraries
import { useParams } from 'next/navigation';

// Services
import { getProducts, getProductById } from '@/services';

// Component
import { ProductCard } from '@/components';

// Types
import type { IProductProps } from '@/interfaces';

export async function RelatedProducts() {
  const params = useParams();
  const currentProductId = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id;

  // Fetch the current product details
  const currentProduct = await getProductById(currentProductId);

  const currentCategory = currentProduct.category;

  // Fetch related products based on the category
  const response = await getProducts({
    page: 1,
    limit: 5,
    filter: { category: currentCategory ?? '' },
  });

  // Exclude the current product from the related products
  const relatedProducts = response.filter(
    (product: IProductProps) => product.id !== currentProductId,
  );

  return (
    <section className="flex flex-col items-center gap-4 mt-8 md:mt-16 lg:mt-32">
      <h2 className="text-3xl font-semibold uppercase">Related Products</h2>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.length !== 0 ? (
          relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              label={product.label}
              rating={product.rating}
            />
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </section>
  );
}
