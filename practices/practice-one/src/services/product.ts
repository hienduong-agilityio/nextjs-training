// Services
import { apiRequest } from './api';

// Constants
import { API_URL, HTTP_METHODS } from '@/constants';

// Type
import type { IProductProps } from '@/interfaces';

export const getProducts = async ({
  page = 0,
  limit = 6,
  filter = {},
  sortBy = '',
}: {
  page?: number;
  limit?: number;
  filter?: { [key: string]: string };
  sortBy?: string;
}): Promise<IProductProps[]> => {
  const queryParams: string[] = [];

  // Add filters to queryParams
  Object.entries(filter).forEach(([key, value]) => {
    if (value) {
      queryParams.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      );
    }
  });

  // Add pagination params if page > 0
  if (page > 0) {
    queryParams.push(`page=${page}`);
    queryParams.push(`limit=${limit}`);
  }

  // Add sortBy if provided
  if (sortBy) {
    queryParams.push(`sortBy=${encodeURIComponent(sortBy)}`);
  }

  // Construct query string
  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

  const apiUrl = `${API_URL.PRODUCT}${queryString}`;

  try {
    const products = await apiRequest<IProductProps[]>({
      url: apiUrl,
      method: HTTP_METHODS.GET,
    });

    return products;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Failed to fetch products');
    } else {
      throw new Error('An unknown error occurred while fetching products');
    }
  }
};

/**
 * Get a product by Id.
 * @param id - The product ID.
 */
export const getProductById = async (id: string): Promise<IProductProps> => {
  try {
    return await apiRequest<IProductProps>({
      url: `${API_URL.PRODUCT}/${id}`,
      method: HTTP_METHODS.GET,
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const createProduct = async (productData: IProductProps) => {
  try {
    return await apiRequest({
      url: API_URL.PRODUCT,
      method: HTTP_METHODS.POST,
      data: productData,
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Failed to create product');
    } else {
      throw new Error('An unknown error while creating the product');
    }
  }
};

export const updateProduct = async (id: string, productData: IProductProps) => {
  try {
    return await apiRequest({
      url: `${API_URL.PRODUCT}/${id}`,
      method: HTTP_METHODS.PUT,
      data: productData,
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        error.message || `Failed to update product with ID ${id}`,
      );
    } else {
      throw new Error('An unknown error while updating the product');
    }
  }
};

export const deleteProduct = async (id: string) => {
  try {
    return await apiRequest({
      url: `${API_URL.PRODUCT}/${id}`,
      method: HTTP_METHODS.DELETE,
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        error.message || `Failed to delete product with ID ${id}`,
      );
    } else {
      throw new Error('An unknown error while deleting the product');
    }
  }
};
