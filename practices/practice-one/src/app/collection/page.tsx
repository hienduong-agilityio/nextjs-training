// Components
import { ProductCard, Pagination } from '@/components';

// Services
import { getProducts } from '@/services';

export default async function CollectionPage(
  props: Readonly<{
    searchParams?: Promise<{
      limit?: string;
      page?: string;
      sortBy?: string;
    }>;
  }>,
) {
  const searchParams = await props.searchParams;
  const query = Number(searchParams?.limit) || 6;
  const currentPage = Number(searchParams?.page) || 1;
  const sortByParam = searchParams?.sortBy ?? '';

  const allProducts = await getProducts({});
  const productData = await getProducts({
    page: currentPage,
    limit: query,
    sortBy: sortByParam,
  });

  const totalPages = Math.ceil(allProducts.length / query);

  return (
    <div className="flex flex-col gap-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-6 w-full">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="w-full bg-secondary-300 flex flex-col items-center ">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
