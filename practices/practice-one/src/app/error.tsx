'use client';

import { useEffect } from 'react';

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="px-4 py-2 mt-4 text-sm text-white bg-primary-400 rounded-md transition-colors hover:bg-primary-400"
        onClick={() => reset()}
      >
        Try again
      </button>
    </section>
  );
}
