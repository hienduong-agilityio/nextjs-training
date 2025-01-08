import { render, screen } from '@testing-library/react';

// UI
import { ProductImages } from '@/ui';

describe('ProductImages Component', () => {
  const defaultProps = {
    images: ['/images/image-placeholder.svg'],
    name: 'image',
  };

  const renderProductImages = (props = defaultProps) => {
    return render(<ProductImages {...props} />);
  };

  const getMainImage = (altText: string) => screen.getByAltText(altText);

  it('matches the snapshot', () => {
    const { asFragment } = renderProductImages();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with default props', () => {
    renderProductImages();

    expect(screen.queryByAltText(/Thumbnail/)).toBeNull();

    const mainImage = getMainImage(defaultProps.name);
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute('src', defaultProps.images[0]);

    const images = ['/images/image1.jpg', '/images/image2.jpg'];
    renderProductImages({ images, name: 'Styled Product' });
  });
});
