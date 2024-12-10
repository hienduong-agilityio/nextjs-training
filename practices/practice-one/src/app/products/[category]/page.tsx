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
  const { category } = params;
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `E-Comm - Products in ${capitalizedCategory}`,
    description: `Explore the best deals and latest arrivals in the ${capitalizedCategory} category.`,
    openGraph: {
      title: `E-Comm - ${capitalizedCategory} Products`,
      description: `Find top-quality products in the ${capitalizedCategory} category.`,
      url: `https://nextjs-training-practice-one-app.vercel.app/products/${category}`,
      siteName: 'E-Comm',
      type: 'website',
      images: [
        {
          url: '/images/product-mock.png',
          width: 1200,
          height: 630,
          alt: 'E-Comm Banner',
        },
      ],
    },
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
