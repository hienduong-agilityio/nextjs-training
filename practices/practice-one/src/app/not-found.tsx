import Link from 'next/link';

// Constants
import { ROUTE } from '@/constants';

export default function NotFound() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center h-[50vh] text-center px-4 sm:px-6 md:px-8">
      <h1 className="text-5xl sm:text-6xl 2xl:text-8xl font-medium text-gray-800">
        404 Not Found
      </h1>
      <p className="text-sm sm:text-base leading-6 font-normal text-gray-600 mt-4 max-w-xs sm:max-w-md">
        Your visited page not found. You may go home page.
      </p>
      <Link
        href={ROUTE.PRODUCTS}
        className="mt-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-6 py-4 bg-primary-100 text-white text-base sm:text-lg font-medium rounded-md hover:bg-primary-200 transition"
      >
        Back to home page
      </Link>
    </section>
  );
}
