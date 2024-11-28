// Components
import { FilterGroup, FilterSortBar } from '@/components';

// Mocks
import { FILTER_GROUP, PRODUCTS_DATA } from '@/mocks';

// Types
import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Products Collection',
    description: `The Products collection page`,
  };
}

export default function CollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="sm:grid sm:grid-cols-12 gap-8 mb-10 md:mb-20 lg:mb-32">
      {/* Filter sidebar */}
      <aside className="flex flex-col gap-2 col-span-12 md:col-span-4 lg:col-span-2 w-full">
        <div className="md:sticky z-0 top-0">
          {FILTER_GROUP.map((group) => (
            <FilterGroup
              key={group.title}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      </aside>

      {/* Filter sort */}
      <div className="col-span-12 md:col-span-8 lg:col-span-10 w-full">
        <FilterSortBar
          itemCount={PRODUCTS_DATA.length}
          sortOptions={['name', 'price']}
          showOptions={['6', '9', '12']}
        />
        {/* List Products */}
        {children}
      </div>
    </section>
  );
}
