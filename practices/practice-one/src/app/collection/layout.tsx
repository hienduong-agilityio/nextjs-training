// Libraries
import { ReactNode, Suspense } from 'react';

// Components
import { CategoryGroup } from '@/components';

// Mocks
import { HOT_DEALS } from '@/mocks';

// UI
import { LoadingCategoryGroup } from '@/ui';

export default function CollectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="sm:grid sm:grid-cols-12 gap-8 mb-10 md:mb-20 lg:mb-32">
      <aside className="flex flex-col gap-2 col-span-12 md:col-span-4 xl:col-span-3 2xl:col-span-2 w-full">
        <div className="md:sticky z-0 top-0">
          <Suspense fallback={<LoadingCategoryGroup />}>
            <CategoryGroup title="Hot Deal" items={HOT_DEALS} />
          </Suspense>
        </div>
      </aside>

      {children}
    </section>
  );
}
