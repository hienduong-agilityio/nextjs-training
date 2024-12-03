import { Category } from '@/types/category';

export interface IProductProps {
  id: string;
  name: string;
  images: string[];
  price: string;
  originalPrice?: string;
  discount?: string;
  shippingInformation?: string;
  rating?: number;
  label?: string;
  description?: string;
  availabilityStatus?: string;
  reviews?: [];
  category?: Category;
}
