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
  price: string;
  originalPrice: string;
  discount?: string;
  shippingInformation?: string;
  rating?: number;
  label?: string;
  description?: string;
  availabilityStatus?: string;
  reviews?: IProductReview[];
  category?: Category;
}
