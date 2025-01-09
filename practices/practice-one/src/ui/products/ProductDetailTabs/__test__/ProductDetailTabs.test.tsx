import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';

// UI
import { ProductDetailTabs } from '@/ui';

// Mocks
import { PRODUCT_REVIEW } from '@/mocks';

// Mock useSearchParams from Next.js
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

describe('ProductDetailTabs Component', () => {
  const mockDescription = 'This is a product description.';

  const mockSearchParams = (query: string) => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams(query));
  };

  const renderProductDetailTabs = (query: string = '') => {
    mockSearchParams(query);
    return render(
      <ProductDetailTabs
        description={mockDescription}
        reviews={PRODUCT_REVIEW}
      />,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderProductDetailTabs();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the component correctly with default active tab', () => {
    renderProductDetailTabs();

    const tabsWrapper = screen.getByRole('tablist');
    expect(tabsWrapper).toHaveClass('flex flex-col w-full');

    const activeTab = screen.getByText('Product Information');
    expect(activeTab).toBeInTheDocument();
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
    expect(activeTab).toHaveClass('text-primary-400 border-primary-400');

    const reviewsTab = screen.getByText('Reviews');
    fireEvent.click(reviewsTab);

    PRODUCT_REVIEW.forEach((review) => {
      expect(screen.getByText(review.reviewerName)).toBeInTheDocument();
    });
  });

  it('renders the reviews tab when the active tab is set to Reviews', () => {
    renderProductDetailTabs('?activeTab=Reviews');

    expect(screen.getByText('Reviews')).toBeInTheDocument();

    PRODUCT_REVIEW.forEach((review) => {
      expect(screen.getByText(review.reviewerName)).toBeInTheDocument();
    });
  });
});
