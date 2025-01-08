import { render, screen } from '@testing-library/react';

// UI
import { ProductReviews } from '@/ui';

// Types
import type { IProductReview } from '@/interfaces';

// Mocks
import { PRODUCT_REVIEW } from '@/mocks';

describe('ProductReviews Component', () => {
  const renderProductReviews = (reviews: IProductReview[] = []) => {
    return render(<ProductReviews reviews={reviews} />);
  };

  it('matches the snapshot when there are no reviews', () => {
    const { asFragment } = renderProductReviews();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a message when there are no reviews', () => {
    renderProductReviews();

    expect(
      screen.getByText('No reviews yet. Be the first to write one!'),
    ).toBeInTheDocument();
  });

  it('renders all reviews correctly', () => {
    renderProductReviews(PRODUCT_REVIEW);

    const reviewsElements = screen.getAllByRole('heading', { level: 4 });
    expect(reviewsElements.length).toBe(PRODUCT_REVIEW.length);

    PRODUCT_REVIEW.forEach((review) => {
      expect(screen.getByText(review.reviewerName)).toBeInTheDocument();

      expect(screen.getByText(review.reviewerEmail)).toBeInTheDocument();

      expect(screen.getByText(review.comment)).toBeInTheDocument();

      const formattedDate = new Date(review.date).toLocaleDateString();
      expect(screen.getByText(formattedDate)).toBeInTheDocument();
    });
  });
});
