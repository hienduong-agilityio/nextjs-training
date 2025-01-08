import { render, screen } from '@testing-library/react';
import { RelatedProducts } from '@/ui';
import { getProducts, getProductById } from '@/services';

// Mock services
jest.mock('@/services', () => ({
  getProducts: jest.fn(),
  getProductById: jest.fn(),
}));

// Mock component
jest.mock('@/components', () => ({
  ProductCard: jest.fn(({ id, title }) => (
    <div data-testid="product-card" key={id}>
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

  it('renders related products correctly', async () => {
    (getProductById as jest.Mock).mockResolvedValue(mockProduct);
    (getProducts as jest.Mock).mockResolvedValue(mockProducts);

    render(await RelatedProducts({ currentProductId: '1' }));

    expect(getProductById).toHaveBeenCalledWith('1');
    expect(getProducts).toHaveBeenCalledWith({
      page: 1,
      limit: 4,
      filter: { category: 'beauty' },
    });

    const productCards = screen.getAllByTestId('product-card');
    expect(productCards[0]).toHaveTextContent('Mock Product 2');
    expect(productCards[1]).toHaveTextContent('Mock Product 3');
    expect(productCards[2]).toHaveTextContent('Mock Product 4');
  });
});
