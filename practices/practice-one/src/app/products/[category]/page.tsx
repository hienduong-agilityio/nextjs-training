// Services
import { getProducts } from '@/services';

// Component
import { ProductTabs, Service } from '@/components';

// Types
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  return {
    title: `Products - ${params.category}`,
    description: `Discover the best products in the ${params.category} category.`,
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const productData = await getProducts(params.category);

  return (
    <div>
      <ProductTabs category={params.category} productData={productData} />
      <Service />
    </div>
  );
}
