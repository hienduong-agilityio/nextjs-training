import { Category } from '@/types/category';

export interface IProductProps {
  id: string;
  name: string;
  images: string[];
  price: string;
  originalPrice?: string;
  discount?: string;
  rating?: number;
  label?: string;
  description?: string;
  reviews?: [];
  category?: Category;
}
