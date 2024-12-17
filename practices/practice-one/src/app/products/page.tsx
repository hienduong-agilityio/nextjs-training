// Service
import { getProducts } from '@/services';

// Components
import { ProductTabs } from '@/components';
import Link from 'next/link';

// Constants
import { ROUTE } from '@/constants';

export default async function ProductPage() {
  const productData = await getProducts({
    page: 1,
    limit: 8,
    filter: { label: 'Hot' },
  });

  return (
    <section>
      <ProductTabs productData={productData} />
      <Link
        href={ROUTE.COLLECTION}
        className="flex justify-center text-lg  mt-8 underline uppercase text-primary-100"
      >
        load more
      </Link>
    </section>
  );
}
