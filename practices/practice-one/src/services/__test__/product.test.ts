// Import the required modules
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '@/services';
import { apiRequest } from '@/services/api';
import { API_URL, HTTP_METHODS } from '@/constants';
import type { IProductProps } from '@/interfaces';

// Mock the apiRequest function
jest.mock('@/services/api', () => ({
  apiRequest: jest.fn(),
}));

describe('getProducts', () => {
  const mockedApiRequest = apiRequest as jest.MockedFunction<typeof apiRequest>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch products with default parameters', async () => {
    const mockResponse: IProductProps[] = [
      {
        id: '1',
        name: 'Product 1',
        price: 100,
        images: [],
        originalPrice: 0,
      },
      {
        id: '2',
        name: 'Product 2',
        price: 200,
        images: [],
        originalPrice: 0,
      },
    ];

    mockedApiRequest.mockResolvedValueOnce(mockResponse);

    const result = await getProducts({});

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}`,
      method: HTTP_METHODS.GET,
    });
    expect(result).toEqual(mockResponse);
  });

  it('should fetch products with filters', async () => {
    const mockResponse: IProductProps[] = [
      {
        id: '1',
        name: 'Product 1',
        price: 100,
        images: [],
        originalPrice: 0,
      },
    ];

    mockedApiRequest.mockResolvedValueOnce(mockResponse);

    const result = await getProducts({
      filter: { category: 'electronics', brand: 'Samsung' },
    });

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}?category=electronics&brand=Samsung`,
      method: HTTP_METHODS.GET,
    });
    expect(result).toEqual(mockResponse);
  });

  it('should fetch products with pagination and sorting', async () => {
    const mockResponse: IProductProps[] = [
      {
        id: '3',
        name: 'Product 3',
        price: 150,
        images: [],
        originalPrice: 0,
      },
    ];

    mockedApiRequest.mockResolvedValueOnce(mockResponse);

    const result = await getProducts({
      page: 2,
      limit: 10,
      sortBy: 'price',
    });

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}?page=2&limit=10&sortBy=price`,
      method: HTTP_METHODS.GET,
    });
    expect(result).toEqual(mockResponse);
  });

  it('should handle empty response gracefully', async () => {
    mockedApiRequest.mockResolvedValueOnce([]);

    const result = await getProducts({});

    expect(result).toEqual([]);
  });

  it('should handle errors and return an empty array', async () => {
    mockedApiRequest.mockRejectedValueOnce(new Error('API Error'));

    const result = await getProducts({});

    expect(result).toEqual([]);
  });

  it('should throw a generic error for unknown exceptions', async () => {
    mockedApiRequest.mockRejectedValueOnce('Unknown Error');

    await expect(getProducts({})).rejects.toThrow(
      'An unknown error occurred while fetching products',
    );
  });
});

describe('getProductById', () => {
  const mockedApiRequest = apiRequest as jest.MockedFunction<typeof apiRequest>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch a product by ID successfully', async () => {
    const mockResponse: IProductProps = {
      id: '1',
      name: 'Product 1',
      images: ['image1.jpg'],
      price: 100,
      originalPrice: 120,
      category: 'beauty',
    };

    mockedApiRequest.mockResolvedValueOnce(mockResponse);

    const result = await getProductById('1');

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}/1`,
      method: HTTP_METHODS.GET,
    });
    expect(result).toEqual(mockResponse);
  });

  it('should return default product object for invalid ID', async () => {
    mockedApiRequest.mockRejectedValueOnce(new Error('Invalid ID'));

    const result = await getProductById('invalid-id');

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}/invalid-id`,
      method: HTTP_METHODS.GET,
    });
    expect(result).toEqual({
      id: '',
      name: '',
      images: [''],
      price: 0,
      originalPrice: 0,
      category: '',
    });
  });
});

describe('createProduct', () => {
  const mockedApiRequest = apiRequest as jest.MockedFunction<typeof apiRequest>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a product successfully', async () => {
    const productData: IProductProps = {
      id: '3',
      name: 'New Product',
      price: 150,
      images: ['image1.jpg'],
      originalPrice: 200,
      category: 'beauty',
    };

    const mockResponse = {
      success: true,
      product: productData,
    };

    mockedApiRequest.mockResolvedValueOnce(mockResponse);

    const result = await createProduct(productData);

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: API_URL.PRODUCT,
      method: HTTP_METHODS.POST,
      data: productData,
    });
    expect(result).toEqual(mockResponse);
  });

  it('should throw an error if API call fails with a specific message', async () => {
    const productData: IProductProps = {
      id: '4',
      name: 'Failed Product',
      price: 50,
      images: ['image2.jpg'],
      originalPrice: 75,
      category: 'beauty',
    };

    mockedApiRequest.mockRejectedValueOnce(new Error('API Error'));

    await expect(createProduct(productData)).rejects.toThrow('API Error');

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: API_URL.PRODUCT,
      method: HTTP_METHODS.POST,
      data: productData,
    });
  });

  it('should throw a generic error for unknown exceptions', async () => {
    const productData: IProductProps = {
      id: '5',
      name: 'Unknown Error Product',
      price: 250,
      images: ['image3.jpg'],
      originalPrice: 300,
      category: 'beauty',
    };

    mockedApiRequest.mockRejectedValueOnce('Unknown Error');

    await expect(createProduct(productData)).rejects.toThrow(
      'An unknown error while creating the product',
    );

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: API_URL.PRODUCT,
      method: HTTP_METHODS.POST,
      data: productData,
    });
  });
});

describe('updateProduct', () => {
  const mockedApiRequest = apiRequest as jest.MockedFunction<typeof apiRequest>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update a product successfully', async () => {
    const productData: IProductProps = {
      id: '6',
      name: 'Updated Product',
      price: 300,
      images: ['image4.jpg'],
      originalPrice: 350,
      category: 'beauty',
    };

    const mockResponse = {
      success: true,
      product: productData,
    };

    mockedApiRequest.mockResolvedValueOnce(mockResponse);

    const result = await updateProduct('6', productData);

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}/6`,
      method: HTTP_METHODS.PUT,
      data: productData,
    });
    expect(result).toEqual(mockResponse);
  });

  it('should throw an error if API call fails with a specific message', async () => {
    const productData: IProductProps = {
      id: '7',
      name: 'Failed Update Product',
      price: 100,
      images: ['image5.jpg'],
      originalPrice: 120,
      category: 'beauty',
    };

    mockedApiRequest.mockRejectedValueOnce(new Error('API Error'));

    await expect(updateProduct('7', productData)).rejects.toThrow('API Error');

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}/7`,
      method: HTTP_METHODS.PUT,
      data: productData,
    });
  });

  it('should throw a generic error for unknown exceptions', async () => {
    const productData: IProductProps = {
      id: '8',
      name: 'Unknown Error Update Product',
      price: 400,
      images: ['image6.jpg'],
      originalPrice: 450,
      category: 'beauty',
    };

    mockedApiRequest.mockRejectedValueOnce('Unknown Error');

    await expect(updateProduct('8', productData)).rejects.toThrow(
      'An unknown error while updating the product',
    );

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}/8`,
      method: HTTP_METHODS.PUT,
      data: productData,
    });
  });
});

describe('deleteProduct', () => {
  const mockedApiRequest = apiRequest as jest.MockedFunction<typeof apiRequest>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should delete a product successfully', async () => {
    const mockResponse = { success: true };

    mockedApiRequest.mockResolvedValueOnce(mockResponse);

    const result = await deleteProduct('9');

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}/9`,
      method: HTTP_METHODS.DELETE,
    });
    expect(result).toEqual(mockResponse);
  });

  it('should throw an error if API call fails with a specific message', async () => {
    mockedApiRequest.mockRejectedValueOnce(new Error('API Error'));

    await expect(deleteProduct('10')).rejects.toThrow('API Error');

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}/10`,
      method: HTTP_METHODS.DELETE,
    });
  });

  it('should throw a generic error for unknown exceptions', async () => {
    mockedApiRequest.mockRejectedValueOnce('Unknown Error');

    await expect(deleteProduct('11')).rejects.toThrow(
      'An unknown error while deleting the product',
    );

    expect(mockedApiRequest).toHaveBeenCalledWith({
      url: `${API_URL.PRODUCT}/11`,
      method: HTTP_METHODS.DELETE,
    });
  });
});
