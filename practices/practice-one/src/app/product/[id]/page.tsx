// Libraries
import { Suspense } from 'react';

// Components
import {
  SocialShare,
  QuantityControl,
  ProductInfo,
  CartAndFavoriteActions,
  ProductImages,
  RelatedProducts,
  LoadingRelatedProducts,
  ProductDetailsTabs,
} from '@/ui';

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <div>
      <section className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 md:gap-16 lg:gap-32 lg:grid-cols-2">
          {/* Left Section - Images */}
          <ProductImages productId={id} />

          {/* Right Section - Details */}
          <div>
            <ProductInfo productId={id} />

            <div className="flex flex-col items-center justify-between gap-4 mt-4 md:flex-row py-6 border-y-2 border-secondary-1000">
              <QuantityControl />
              <CartAndFavoriteActions />
            </div>

            <SocialShare />
          </div>
        </div>
      </section>

      <ProductDetailsTabs productId={id} />

      <Suspense fallback={<LoadingRelatedProducts />}>
        <RelatedProducts currentProductId={id} />
      </Suspense>
    </div>
  );
}
