// Components
import { ProductCard, Pagination } from '@/components';

// Constants
import { ROUTE, SORT_PRODUCT_OPTIONS } from '@/constants';

// Helpers
import { capitalizeText } from '@/helpers';

// Services
import { getProducts } from '@/services';

// Types
import type { Metadata } from 'next';

// UI
import { FilterSortBar } from '@/ui';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    sortBy?: string;
    limit?: string;
    page?: string;
    search?: string;
  };
}): Promise<Metadata> {
  const category = searchParams?.category ?? 'All Products';
  const formattedCategory = capitalizeText(category);

  return {
    title: `E-Comm - ${formattedCategory} Collection`,
    description: `Browse our ${category} collection. Find the best deals and top-rated products at E-Comm.`,
    openGraph: {
      title: `E-Comm - ${formattedCategory} Collection`,
      description: `Explore our ${formattedCategory} collection at E-Comm. Shop now for the best deals and highest-rated items.`,
      url: `https://nextjs-training-practice-one-app.vercel.app${ROUTE.COLLECTION}?category=${category}&sortBy=${searchParams?.sortBy ?? ''}&limit=${searchParams?.limit ?? ''}&page=${searchParams?.page ?? ''}`,
      images: [
        {
          url: '/images/product-mock.png',
          alt: `${formattedCategory} Collection`,
        },
      ],
    },
  };
}

export default async function CollectionPage({
  searchParams,
}: {
  searchParams?: {
    limit?: string;
    page?: string;
    sortBy?: string;
    category?: string;
    search?: string;
  };
}) {
  const query = Number(searchParams?.limit) || 6;
  const currentPage = Number(searchParams?.page) || 1;
  const sortByParam = searchParams?.sortBy ?? '';
  const filterByNameParam = searchParams?.search ?? '';
  const collectionQuery = searchParams?.category ?? '';

  const filteredProducts = await getProducts({
    filter: { category: collectionQuery, name: filterByNameParam },
  });

  const productData = await getProducts({
    page: currentPage,
    limit: query,
    sortBy: sortByParam,
    filter: { category: collectionQuery, name: filterByNameParam },
  });

  const totalPages = Math.ceil(filteredProducts.length / query);

  return (
    <div className="col-span-12 md:col-span-8 lg:col xl:col-span-9 2xl:col-span-10 w-full">
      <FilterSortBar
        itemCount={filteredProducts.length}
        sortOptions={SORT_PRODUCT_OPTIONS}
        showOptions={['6', '9', '12']}
      />
      <div className="flex flex-col gap-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-6 w-full">
          {productData.length > 0 ? (
            productData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
        <div className="w-full bg-secondary-300 flex flex-col items-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
