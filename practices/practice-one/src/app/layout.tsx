// Fonts
import { Poppins } from 'next/font/google';

// Types
import type { Metadata } from 'next';

// Styles
import './globals.css';

// Components
import { Header } from '@/components';

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
        <main className="container mx-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
