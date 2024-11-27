// Components
import { Service } from '@/components';

export default function ProductsLayout({
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
