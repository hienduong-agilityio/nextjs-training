// Services
import { apiRequest } from './api';

// Constants
import { API_URL, HTTP_METHODS } from '@/constants';

// Type
import type { IProductProps } from '@/interfaces';

export const getProducts = async (
  category?: string,
): Promise<IProductProps[]> => {
  try {
    return await apiRequest<IProductProps[]>({
      url: category ? `${API_URL.PRODUCT}?${category}` : API_URL.PRODUCT,
      method: HTTP_METHODS.GET,
    });
  } catch (error: unknown) {
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
  } catch (error: unknown) {
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
  } catch (error: unknown) {
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        error.message || `Failed to delete product with ID ${id}`,
      );
    } else {
      throw new Error('An unknown error while deleting the product');
    }
  }
};
