// Libraries
import { Suspense } from 'react';

// UI
import { LoadingRelatedProducts, RelatedProducts } from '@/ui';

export default async function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 py-8">
      {children}

      {/* Right Column - Related Products */}
      <Suspense fallback={<LoadingRelatedProducts />}>
        <RelatedProducts />
      </Suspense>
    </div>
  );
}
