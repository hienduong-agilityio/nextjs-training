// Components
import { Service } from '@/components';

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
      <Service />
    </>
  );
}
