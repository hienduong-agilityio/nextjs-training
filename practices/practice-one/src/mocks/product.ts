import { IProductProps } from '@/interfaces/product';

import { Category } from '@/types/category';

export const CATEGORIES: (Category | 'all')[] = [
  'all',
  'beauty',
  'fragrances',
  'furniture',
  'groceries',
];

export const PRODUCTS_DATA: IProductProps[] = [
  {
    id: '1',
    name: 'Sneakers',
    images: ['/images/product-mock.png'],
    price: 99,
    originalPrice: '$129',
    discount: '23%',
    rating: 5,
    category: 'fragrances',
  },
  {
    id: '2',
    name: 'Leather Shoulder Bag',
    images: ['/images/product-mock.png'],
    price: 299.43,
    originalPrice: '$534.33',
    discount: '44%',
    rating: 5,
    category: 'beauty',
  },
  {
    id: '3',
    name: 'Nike Air Max 270 React',
    images: ['/images/product-mock.png'],
    price: 299.43,
    originalPrice: '$534.33',
    discount: '44%',
    rating: 5,
    category: 'fragrances',
    label: 'HOT',
  },
  {
    id: '4',
    name: 'Classic Leather Belt',
    images: ['/images/product-mock.png'],
    price: 199.99,
    originalPrice: '$249.99',
    discount: '20%',
    rating: 4,
    category: 'furniture',
  },
  {
    id: '5',
    name: 'Aviator Sunglasses',
    images: ['/images/product-mock.png'],
    price: 159.99,
    originalPrice: '$199.99',
    discount: '20%',
    rating: 4,
    category: 'groceries',
  },
  {
    id: '6',
    name: 'Round Frame Sunglasses',
    images: ['/images/product-mock.png'],
    price: 139.99,
    originalPrice: '$179.99',
    discount: '22%',
    rating: 4,
    category: 'groceries',
  },
];
