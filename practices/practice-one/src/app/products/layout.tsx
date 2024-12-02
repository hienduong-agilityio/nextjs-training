// Components
import { Service } from '@/components';
import Link from 'next/link';

// Types
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Products',
    description: `The Products landing page`,
  };
}

export default async function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      {children}
      <Link
        href={'/collection'}
        className="text-lg mt-8 underline uppercase text-primary-100"
      >
        learn more
      </Link>
      <Service />
    </div>
  );
}
