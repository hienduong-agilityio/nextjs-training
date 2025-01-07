// Libraries
import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname, useSearchParams } from 'next/navigation';

// Components
import { Pagination } from '@/components';

// Constants
import { ROUTE } from '@/constants';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

jest.mock('react', () => {
  const actualReact = jest.requireActual('react');
  return {
    ...actualReact,
    useOptimistic: jest.fn((initialValue) => [initialValue, jest.fn()]),
  };
});

describe('Pagination Component', () => {
  const mockUsePathname = usePathname as jest.Mock;
  const mockUseSearchParams = useSearchParams as jest.Mock;

  beforeEach(() => {
    mockUsePathname.mockReturnValue(ROUTE.COLLECTION);
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderPagination = (
    props: Partial<React.ComponentProps<typeof Pagination>> = {},
  ) => render(<Pagination totalPages={5} {...props} />);

  const verifyPageAttributes = (
    page: HTMLElement,
    pageNumber: number,
    isActive: boolean,
  ) => {
    expect(page).toHaveTextContent(pageNumber.toString());
    expect(page).toHaveAttribute(
      'href',
      `${ROUTE.COLLECTION}?page=${pageNumber}`,
    );
    if (isActive) {
      expect(page).toHaveClass('bg-primary-200 text-white border-primary-200');
      expect(page).toHaveAttribute('aria-current', 'page');
    } else {
      expect(page).toHaveClass('text-gray-700 hover:bg-gray-100');
      expect(page).not.toHaveAttribute('aria-current');
    }
  };

  const getPageLinks = () => screen.getAllByRole('link');

  it('renders all pages correctly', () => {
    const { asFragment } = renderPagination();

    const pages = getPageLinks();
    expect(pages).toHaveLength(5);

    pages.forEach((page, index) => {
      verifyPageAttributes(page, index + 1, index === 0);
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies active styles to the current page', () => {
    const { asFragment } = renderPagination({ currentPage: 3 });

    const pages = getPageLinks();

    const pageLinks = getPageLinks();
    const targetPage = pageLinks[3];
    fireEvent.click(targetPage);

    verifyPageAttributes(targetPage, 4, false);

    pages.forEach((page, index) => {
      verifyPageAttributes(page, index + 1, index + 1 === 3);
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('constructs correct URLs for each page with query parameters', () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams({ search: 'query' }),
    );
    const { asFragment } = renderPagination();

    const pages = getPageLinks();
    pages.forEach((page, index) => {
      const expectedHref = `${ROUTE.COLLECTION}?search=query&page=${index + 1}`;
      expect(page).toHaveAttribute('href', expectedHref);
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
