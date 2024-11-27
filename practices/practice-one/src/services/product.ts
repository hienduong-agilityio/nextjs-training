// Services
import { apiRequest } from './api';

// Constants
import { API_URL, HTTP_METHODS } from '@/constants';

// Type
import type { IProductProps } from '@/interfaces';

export const getProducts = async ({
  page = 0,
  limit = 10,
  filter = {},
}: {
  page?: number;
  limit?: number;
  filter?: { [key: string]: string };
}): Promise<IProductProps[]> => {
  const queryParams: string[] = [];

  for (const [key, value] of Object.entries(filter)) {
    if (value) {
      queryParams.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      );
    }
  }

  if (page > 0) {
    queryParams.push(`page=${page}`);
    queryParams.push(`limit=${limit}`);
  }

  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

  const apiUrl = `${API_URL.PRODUCT}${queryString}`;

  try {
    const projects = await apiRequest<IProductProps[]>({
      url: apiUrl,
      method: HTTP_METHODS.GET,
    });

    return projects;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Failed to fetch products');
    } else {
      throw new Error('An unknown error while fetching products');
    }
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
