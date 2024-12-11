// Components
import { Service } from '@/components';
import Link from 'next/link';

// Types
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'E-comm - Products',
    description: `E-Comm Let's buy and share 🤑.`,
  };
}

export default async function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Link
        href={'/collection'}
        className="text-lg mt-8 underline uppercase text-primary-100"
      >
        load more
      </Link>
      <Service />
    </>
  );
}
