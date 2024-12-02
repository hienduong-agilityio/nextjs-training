// Service
import { getProducts } from '@/services';

// Components
import { ProductTabs } from '@/components';

export default async function ProductPage() {
  const productData = await getProducts({
    page: 1,
    limit: 8,
    filter: { label: 'Hot' },
  });

  return (
    <div>
      <ProductTabs productData={productData} />
    </div>
  );
}
