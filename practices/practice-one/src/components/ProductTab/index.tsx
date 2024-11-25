// Mock
import { CATEGORIES, PRODUCTS_DATA } from '@/mocks';

// Components
import { Tabs, ProductCard } from '@/components';

// TODO: Update unit test and component when fetching product data
export const ProductTabs = () => {
  // Mock data to check responsive and UI
  const items = CATEGORIES.map((category) => ({
    title: category,
    content: (category === 'All'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((product) => product.category === category)
    ).map((product) => (
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
    )),
  }));

  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-semibold uppercase">Best seller</h2>
      <Tabs
        items={items}
        customClass={{
          wrapper: 'max-w-6xl flex flex-col gap-y-6 w-full',
          header: 'flex justify-center gap-7 overflow-auto w-auto',
          button:
            'p-3 text-sm font-medium transition-colors duration-200 text-center outline-none border-b-2',
          activeButton: 'text-primary-400 border-primary-400',
          content: 'mt-4',
          activeContent:
            'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6',
          inactiveContent: 'hidden',
        }}
      />
    </section>
  );
};
