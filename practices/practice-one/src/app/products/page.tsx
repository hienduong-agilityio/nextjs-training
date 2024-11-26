// Service
import { getProducts } from '@/services';

// Components
import { ProductTabs, Service } from '@/components';

// Types
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Products',
    description: `The Products landing page`,
  };
}

export default async function ProductPage() {
  const productData = await getProducts();

  return (
    <div>
      <ProductTabs productData={productData} />
      <Service />
    </div>
  );
}
