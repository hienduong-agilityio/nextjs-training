// Libraries
import { Metadata } from 'next';
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
  LoadingProductTabs,
} from '@/ui';

// Services
import { getProductById } from '@/services';

// Metadata generation
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProductById(params.id);

  return {
    title: `E-comm - ${product.name}`,
    description: product.description?.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://my-store.com/product/${product.id}`,
      images: product.images.map((img) => ({
        url: img,
        alt: product.name,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: product.images[0],
    },
  };
}

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

      <Suspense fallback={<LoadingProductTabs />}>
        <ProductDetailsTabs productId={id} />
      </Suspense>

      <Suspense fallback={<LoadingRelatedProducts />}>
        <RelatedProducts currentProductId={id} />
      </Suspense>
    </div>
  );
}
