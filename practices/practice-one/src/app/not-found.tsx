import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center h-svh text-center px-4">
      <h1 className="text-8xl font-bold text-gray-800">404 Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">
        Sorry, the page you’re looking for doesn’t exist. You can go back to the
        homepage.
      </p>
      <Link
        href="/products"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition"
      >
        Back to Home Page
      </Link>
    </section>
  );
}
