import { ReactNode, Suspense } from 'react';
import { CategoryGroup, FilterSortBar } from '@/components';
import { HOT_DEALS } from '@/mocks';
import { LoadingCategoryGroup, LoadingFilterSortBar } from '@/ui';

export default function CollectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="sm:grid sm:grid-cols-12 gap-8 mb-10 md:mb-20 lg:mb-32">
      <aside className="flex flex-col gap-2 col-span-12 md:col-span-4 lg:col-span-2 w-full">
        <div className="md:sticky z-0 top-0">
          <Suspense fallback={<LoadingCategoryGroup />}>
            <CategoryGroup title="Hot Deal" items={HOT_DEALS} />
          </Suspense>
        </div>
      </aside>

      {/* Filter sort */}
      <div className="col-span-12 md:col-span-8 lg:col-span-10 w-full">
        <Suspense fallback={<LoadingFilterSortBar />}>
          <FilterSortBar
            itemCount={0}
            sortOptions={['name', 'price']}
            showOptions={['6', '9', '12']}
          />
        </Suspense>
        {children}
      </div>
    </section>
  );
}
