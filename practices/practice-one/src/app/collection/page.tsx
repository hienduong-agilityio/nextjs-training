// Components
import {
  ProductCard,
  Pagination,
  FilterSortBar,
  FilterGroup,
} from '@/components';
import { FILTER_GROUP } from '@/mocks';

// Helpers
import { capitalizeCategory } from '@/helpers';

// Services
import { getProducts } from '@/services';

// Types
import type { Metadata } from 'next';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    sortBy?: string;
    limit?: string;
    page?: string;
  };
}): Promise<Metadata> {
  const category = searchParams?.category ?? 'All Products';
  const formattedCategory = capitalizeCategory(category);

  return {
    title: `E-Comm - ${formattedCategory} Collection`,
    description: `Browse our ${category} collection. Find the best deals and top-rated products at E-Comm.`,
    openGraph: {
      title: `E-Comm - ${formattedCategory} Collection`,
      description: `Explore our ${formattedCategory} collection at E-Comm. Shop now for the best deals and highest-rated items.`,
      url: `https://nextjs-training-practice-one-app.vercel.app/collection?category=${category}&sortBy=${searchParams?.sortBy ?? ''}&limit=${searchParams?.limit ?? ''}&page=${searchParams?.page ?? ''}`,
      images: [
        {
          url: '/images/product-mock.png',
          alt: `${formattedCategory} Collection`,
        },
      ],
    },
  };
}

export default async function CollectionPage(
  props: Readonly<{
    searchParams?: Promise<{
      limit?: string;
      page?: string;
      sortBy?: string;
      category?: string;
    }>;
  }>,
) {
  const searchParams = await props.searchParams;
  const query = Number(searchParams?.limit) || 6;
  const currentPage = Number(searchParams?.page) || 1;
  const sortByParam = searchParams?.sortBy ?? '';
  const collectionQuery = searchParams?.category ?? '';

  const allProducts = await getProducts({
    filter: { category: collectionQuery },
  });
  const productData = await getProducts({
    page: currentPage,
    limit: query,
    sortBy: sortByParam,
    filter: { category: collectionQuery },
  });

  const totalPages = Math.ceil(allProducts.length / query);

  return (
    <section className="sm:grid sm:grid-cols-12 gap-8 mb-10 md:mb-20 lg:mb-32">
      <aside className="flex flex-col gap-2 col-span-12 md:col-span-4 lg:col-span-2 w-full">
        <div className="md:sticky z-0 top-0">
          {FILTER_GROUP.map((group) => (
            <FilterGroup
              key={group.title}
              title={group.title}
              items={group.items}
              currentCategory={collectionQuery}
            />
          ))}
        </div>
      </aside>

      {/* Filter sort */}
      <div className="col-span-12 md:col-span-8 lg:col-span-10 w-full">
        <FilterSortBar
          itemCount={productData.length}
          sortOptions={['name', 'price']}
          showOptions={['6', '9', '12']}
        />
        <div className="flex flex-col gap-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-6 w-full">
            {productData?.length > 0 ? (
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
    </section>
  );
}
