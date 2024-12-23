import { Category } from '@/types/category';

export interface IProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
export interface IProductProps {
  id: string;
  name: string;
  images: string[];
  price: number;
  originalPrice: number;
  discount?: string;
  shippingInformation?: string;
  minimumOrderQuantity?: number;
  rating?: number;
  label?: string;
  description?: string;
  availabilityStatus?: string;
  reviews?: IProductReview[];
  category?: Category;
}
