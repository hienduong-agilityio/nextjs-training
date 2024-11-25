import { Category } from '@/types/category';

export interface IProductProps {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating?: number;
  label?: string;
  category?: Category;
}
