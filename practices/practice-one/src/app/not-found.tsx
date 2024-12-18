import Link from 'next/link';

// Constants
import { ROUTE } from '@/constants';

export default function NotFound() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center h-[50vh] text-center px-4">
      <h1 className="text-8xl font-medium text-gray-800">404 Not Found</h1>
      <p className="text-base leading-6 font-normal text-gray-600 mt-4">
        Your visited page not found. You may go home page.
      </p>
      <Link
        href={ROUTE.PRODUCTS}
        className="mt-6 w-1/4 px-6 py-4 bg-primary-100 text-white text-lg font-medium rounded-md hover:bg-primary-200 transition"
      >
        Back to Home Page
      </Link>
    </section>
  );
}
