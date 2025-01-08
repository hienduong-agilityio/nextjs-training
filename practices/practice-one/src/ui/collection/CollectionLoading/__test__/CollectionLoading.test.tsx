import { render, screen } from '@testing-library/react';

// UI
import { LoadingCategoryGroup, LoadingFilterSortBar } from '@/ui';

describe('Loading Components for Collection', () => {
  it('renders LoadingCategoryGroup and matches snapshot', () => {
    const { asFragment } = render(<LoadingCategoryGroup />);
    expect(screen.getByLabelText('Loading Category Group')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders LoadingFilterSortBar and matches snapshot', () => {
    const { asFragment } = render(<LoadingFilterSortBar />);
    expect(
      screen.getByLabelText('Loading Filter Sort Bar'),
    ).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
