// Services
import { getProducts } from '@/services';

// Components
import { ProductTabs } from '@/components';

// Types
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  return {
    title: `E-comm - Products ${params.category}`,
    description: `Discover the best products in the ${params.category} category.`,
  };
}

export default async function ProductCategoryPage({
  params,
}: Readonly<{
  params: { category: string };
}>) {
  const { category } = params;

  const productData = await getProducts({
    page: 1,
    limit: 8,
    filter: { category: category },
  });

  return <ProductTabs category={category} productData={productData} />;
}
