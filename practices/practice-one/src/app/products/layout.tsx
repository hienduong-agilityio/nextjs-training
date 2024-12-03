// Components
import { Service } from '@/components';

// Types
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'E-comm - Products',
    description: `The Products landing page`,
  };
}

export default async function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <Service />
    </div>
  );
}
