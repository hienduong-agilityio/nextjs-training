// Libraries
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Components
import {
  SocialShare,
  QuantityControl,
  ProductInfo,
  CartAndFavoriteActions,
  ProductImages,
  ProductDetailTabs,
} from '@/ui';

// Services
import { getProductById } from '@/services';

// Constants
import { ROUTE } from '@/constants';

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
      url: `https://nextjs-training-practice-one-app.vercel.app${ROUTE.PRODUCT}/${product.id}`,
      images: [
        {
          url: product.images[0],
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const productData = await getProductById(id);

  if (!productData.id) {
    return notFound();
  }

  return (
    <section className="px-4 py-8">
      <div className="grid gap-8 md:gap-16 lg:gap-32 lg:grid-cols-2">
        {/* Product Images */}
        <ProductImages images={productData.images} name={productData.name} />

        {/* Product Details */}
        <div>
          <ProductInfo {...productData} />

          <div className="flex flex-col items-center justify-between gap-4 mt-4 md:flex-row py-6 border-y-2 border-secondary-1000">
            <QuantityControl />
            <CartAndFavoriteActions />
          </div>

          <SocialShare />
        </div>
      </div>

      <ProductDetailTabs
        description={productData.description}
        reviews={productData.reviews}
      />
    </section>
  );
}