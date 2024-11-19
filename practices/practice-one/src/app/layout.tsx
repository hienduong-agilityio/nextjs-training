// Fonts
import { Poppins } from 'next/font/google';

// Types
import type { Metadata } from 'next';

// Styles
import './globals.css';

// Components
import { Header } from '@/components';
import ProductTabs from '@/components/Tabs';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'E-Comm',
  description: 'E-Comm landing page',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
          <Header />
          <ProductTabs />
          {children}
        </main>
      </body>
    </html>
  );
}
