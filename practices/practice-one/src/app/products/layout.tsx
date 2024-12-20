// Components
import { Service } from '@/components';

export const metadata = {
  title: 'E-comm - Products',
  description: `E-Comm Let's buy and share 🤑.`,
};

export default function ProductsLayout({
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
