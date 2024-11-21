import { IProductProps } from '@/interfaces/product';

import { Category } from '@/types/category';

export const CATEGORIES: (Category | 'All')[] = [
  'All',
  'Bags',
  'Sneakers',
  'Belt',
  'Sunglasses',
];

export const PRODUCTS_DATA: IProductProps[] = [
  {
    id: '1',
    name: 'Sneakers',
    image: '/images/sneakers.jpg',
    price: '$99',
    originalPrice: '$129',
    discount: '23%',
    rating: 5,
    category: 'Sneakers',
  },
  {
    id: '2',
    name: 'Leather Shoulder Bag',
    image: '/images/bag.jpg',
    price: '$299.43',
    originalPrice: '$534.33',
    discount: '44%',
    rating: 5,
    category: 'Bags',
  },
  {
    id: '3',
    name: 'Nike Air Max 270 React',
    image: '/images/nike_air_max.jpg',
    price: '$299.43',
    originalPrice: '$534.33',
    discount: '44%',
    rating: 5,
    category: 'Sneakers',
    label: 'HOT',
  },
  {
    id: '4',
    name: 'Classic Leather Belt',
    image: '/images/leather_belt.jpg',
    price: '$199.99',
    originalPrice: '$249.99',
    discount: '20%',
    rating: 4,
    category: 'Belt',
  },
  {
    id: '5',
    name: 'Aviator Sunglasses',
    image: '/images/aviator_sunglasses.jpg',
    price: '$159.99',
    originalPrice: '$199.99',
    discount: '20%',
    rating: 4,
    category: 'Sunglasses',
  },
  {
    id: '6',
    name: 'Round Frame Sunglasses',
    image: '/images/round_sunglasses.jpg',
    price: '$139.99',
    originalPrice: '$179.99',
    discount: '22%',
    rating: 4,
    category: 'Sunglasses',
  },
];