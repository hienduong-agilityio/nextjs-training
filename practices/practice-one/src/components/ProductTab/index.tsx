// Mock
import { CATEGORIES, PRODUCTS_DATA } from '@/mocks';

// Components
import { Tabs } from '@/components';
import Image from 'next/image';

export const ProductTabs = async () => {
  const items = CATEGORIES.map((category) => ({
    title: category,
    content: (category === 'All'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((product) => product.category === category)
    ).map((product) => (
      <div
        key={product.id}
        className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={128}
          height={128}
          className="rounded-md mb-3 object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
        <span className="text-blue-600 font-medium">{product.price}</span>
      </div>
    )),
  }));

  return (
    <section className="flex flex-col items-center gap-4 ">
      <h2 className="uppercase text-3xl font-semibold">Best seller</h2>
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
            'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
          inactiveContent: 'hidden',
        }}
      />
    </section>
  );
};
