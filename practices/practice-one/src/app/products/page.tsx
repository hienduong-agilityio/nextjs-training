// Service
import { getProducts } from '@/services';

// Components
import { ProductTabs } from '@/components';

export default async function ProductPage() {
  const productData = await getProducts();

  return (
    <div>
      <ProductTabs productData={productData} />
    </div>
  );
}
