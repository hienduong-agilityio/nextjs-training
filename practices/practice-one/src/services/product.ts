// Services
import { apiRequest } from './api';

// Constants
import { API_URL, HTTP_METHODS } from '@/constants';

// Type
import type { IProductProps } from '@/interfaces';

export const getProjects = async (): Promise<IProductProps[]> => {
  try {
    return await apiRequest<IProductProps[]>({
      url: `${API_URL.PROJECT}`,
      method: HTTP_METHODS.GET,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Failed to fetch projects');
    } else {
      throw new Error('An unknown error while fetching projects');
    }
  }
};

export const createProject = async (projectData: IProductProps) => {
  try {
    return await apiRequest({
      url: API_URL.PROJECT,
      method: HTTP_METHODS.POST,
      data: projectData,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Failed to create project');
    } else {
      throw new Error('An unknown error while creating the project');
    }
  }
};

export const updateProject = async (id: string, projectData: IProductProps) => {
  try {
    return await apiRequest({
      url: `${API_URL.PROJECT}/${id}`,
      method: HTTP_METHODS.PUT,
      data: projectData,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        error.message || `Failed to update project with ID ${id}`,
      );
    } else {
      throw new Error('An unknown error while updating the project');
    }
  }
};

export const deleteProject = async (id: string) => {
  try {
    return await apiRequest({
      url: `${API_URL.PROJECT}/${id}`,
      method: HTTP_METHODS.DELETE,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        error.message || `Failed to delete project with ID ${id}`,
      );
    } else {
      throw new Error('An unknown error while deleting the project');
    }
  }
};
