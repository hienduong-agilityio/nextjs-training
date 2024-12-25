// Fonts
import { Poppins } from 'next/font/google';

// Types
import type { Metadata } from 'next';

// Styles
import './globals.css';

// Layout
import { Header, Footer } from '@/layouts';

// Providers
import { ToastContainer } from '@/components';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs-training-practice-one-app.vercel.app'),
  title: {
    default: 'E-Comm',
    template: '%s',
  },
  description: `E-Comm Let's buy and share 🤑.`,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'E-Comm',
    description: `E-Comm Let's buy and share 🤑.`,
    url: 'https://nextjs-training-practice-one-app.vercel.app',
    siteName: 'E-Comm',
    type: 'website',
    images: [
      {
        url: '/images/product-mock.png',
        width: 1200,
        height: 630,
        alt: 'E-Comm Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Comm',
    description: `E-Comm Let's buy and share 🤑.`,
    images: [
      {
        url: '/images/twitter.png',
        alt: 'E-Comm Banner for Twitter',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="md:container md:mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
