import { render, screen } from '@testing-library/react';
import { notFound } from 'next/navigation';

// UI
import { RelatedProducts } from '@/ui';

// Services
import { getProducts, getProductById } from '@/services';

// Mock services
jest.mock('@/services', () => ({
  getProducts: jest.fn(),
  getProductById: jest.fn(),
}));

// Mock notFound
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

// Mock component
jest.mock('@/components', () => ({
  ProductCard: jest.fn(({ id, title }) => (
    <div key={id} aria-label={title}>
      {title}
    </div>
  )),
}));

describe('RelatedProducts Component', () => {
  const mockProduct = {
    id: '1',
    title: 'Mock Product 1',
    category: 'beauty',
  };

  const mockProducts = [
    { id: '2', title: 'Mock Product 2', category: 'beauty' },
    { id: '3', title: 'Mock Product 3', category: 'beauty' },
    { id: '4', title: 'Mock Product 4', category: 'beauty' },
    { id: '5', title: 'Mock Product 5', category: 'beauty' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls notFound if current product is not found', async () => {
    (getProductById as jest.Mock).mockResolvedValue(null);

    render(await RelatedProducts({ currentProductId: '999' }));

    expect(getProductById).toHaveBeenCalledWith('999');
    expect(notFound).toHaveBeenCalled();
  });

  it('uses default product ID when currentProductId is not provided', async () => {
    (getProductById as jest.Mock).mockResolvedValue(mockProduct);
    (getProducts as jest.Mock).mockResolvedValue(mockProducts);

    render(await RelatedProducts({}));

    expect(getProductById).toHaveBeenCalledWith('1');
    expect(getProducts).toHaveBeenCalledWith({
      page: 1,
      limit: 4,
      filter: { category: 'beauty' },
    });

    const productCards = mockProducts.map((product) =>
      screen.getByLabelText(product.title),
    );
    expect(productCards).toHaveLength(4);
    expect(productCards[0]).toHaveTextContent('Mock Product 2');
    expect(productCards[1]).toHaveTextContent('Mock Product 3');
    expect(productCards[2]).toHaveTextContent('Mock Product 4');
  });

  it('uses default category when currentCategory is not available', async () => {
    const mockProductWithoutCategory = { ...mockProduct, category: null };
    (getProductById as jest.Mock).mockResolvedValue(mockProductWithoutCategory);
    (getProducts as jest.Mock).mockResolvedValue(mockProducts);

    render(await RelatedProducts({ currentProductId: '1' }));

    expect(getProductById).toHaveBeenCalledWith('1');
    expect(getProducts).toHaveBeenCalledWith({
      page: 1,
      limit: 4,
      filter: { category: 'beauty' },
    });

    const productCards = mockProducts.map((product) =>
      screen.getByLabelText(product.title),
    );
    expect(productCards).toHaveLength(4);
    expect(productCards[0]).toHaveTextContent('Mock Product 2');
    expect(productCards[1]).toHaveTextContent('Mock Product 3');
    expect(productCards[2]).toHaveTextContent('Mock Product 4');
  });

  it('matches the snapshot when related products are found', async () => {
    (getProductById as jest.Mock).mockResolvedValue(mockProduct);
    (getProducts as jest.Mock).mockResolvedValue(mockProducts);

    const { container } = render(
      await RelatedProducts({ currentProductId: '1' }),
    );

    expect(container).toMatchSnapshot();
  });

  it('matches the snapshot when no related products are found', async () => {
    (getProductById as jest.Mock).mockResolvedValue(mockProduct);
    (getProducts as jest.Mock).mockResolvedValue([]);

    const { container } = render(
      await RelatedProducts({ currentProductId: '1' }),
    );

    expect(screen.getByText('No related products found.')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
