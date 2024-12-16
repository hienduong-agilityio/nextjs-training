'use client';

// Libraries
import { twMerge } from 'tailwind-merge';

// Hooks
import { usePathname, useSearchParams } from 'next/navigation';

// Components
import Link from 'next/link';

// Constants
import { SEARCH_PARAMS } from '@/constants';

interface PaginationProps {
  totalPages: number;
  currentPage?: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page =
    (currentPage ?? Number(searchParams.get(SEARCH_PARAMS.PAGE))) || 1;

  const createPageURL = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set(SEARCH_PARAMS.PAGE, page.toString());

    return `${pathname}?${params.toString()}`;
  };

  // Generate all pages
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center space-x-2" aria-label="Pagination">
      {pages.map((pageItem) => (
        <Link
          key={pageItem}
          href={createPageURL(pageItem)}
          className={twMerge(
            'px-5 py-3 ',
            page === pageItem
              ? 'bg-primary-200 text-white border-primary-200'
              : 'text-gray-700 hover:bg-gray-100',
          )}
          aria-current={page === pageItem ? SEARCH_PARAMS.PAGE : undefined}
        >
          {pageItem}
        </Link>
      ))}
    </div>
  );
}
