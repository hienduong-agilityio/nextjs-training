// Components
import { ReactNode, Suspense } from 'react';
import { LoadingRelatedProducts, RelatedProducts } from '@/ui';

export default async function ProductLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <section className="flex flex-col items-center gap-4 mt-8 md:mt-16 lg:mt-32">
        <h2 className="text-3xl font-semibold uppercase">Related products</h2>
        <Suspense fallback={<LoadingRelatedProducts />}>
          <RelatedProducts />
        </Suspense>
      </section>
    </>
  );
}
