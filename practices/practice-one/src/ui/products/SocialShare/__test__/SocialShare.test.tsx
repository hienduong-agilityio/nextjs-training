import { render, screen } from '@testing-library/react';

// UI
import { SocialShare } from '@/ui';

describe('SocialShare Component', () => {
  let facebookButton: HTMLElement;
  let twitterButton: HTMLElement;

  beforeEach(() => {
    render(<SocialShare />);
    facebookButton = screen.getByLabelText('Share on Facebook');
    twitterButton = screen.getByLabelText('Share on Twitter');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<SocialShare />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders two buttons with correct components', () => {
    expect(facebookButton).toBeInTheDocument();
    expect(facebookButton).toHaveTextContent('Share on Facebook');
    expect(facebookButton).toHaveClass(
      'flex-1 justify-center py-3 gap-1 xl:gap-3 xl:px-6 bg-lightBlue-800 text-white hover:bg-lightBlue-900 whitespace-nowrap',
    );

    expect(twitterButton).toBeInTheDocument();
    expect(twitterButton).toHaveTextContent('Share on Twitter');
    expect(twitterButton).toHaveClass(
      'flex-1 justify-center py-3 gap-1 xl:gap-3 xl:px-6 bg-sky-400 text-white hover:bg-sky-500 whitespace-nowrap',
    );
  });
});
