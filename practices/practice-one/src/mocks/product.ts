// Types
import type { Category } from '@/types';
import type { ICartItem, IProductProps, IProductReview } from '@/interfaces';

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
    originalPrice: 129,
    discount: '23%',
    rating: 5,
    category: 'fragrances',
  },
  {
    id: '2',
    name: 'Leather Shoulder Bag',
    images: ['/images/product-mock.png'],
    price: 299.43,
    originalPrice: 534.33,
    discount: '44%',
    rating: 5,
    category: 'beauty',
  },
  {
    id: '3',
    name: 'Nike Air Max 270 React',
    images: ['/images/product-mock.png'],
    price: 299.43,
    originalPrice: 534.33,
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
    originalPrice: 249.99,
    discount: '20%',
    rating: 4,
    category: 'furniture',
  },
  {
    id: '5',
    name: 'Aviator Sunglasses',
    images: ['/images/product-mock.png'],
    price: 159.99,
    originalPrice: 199.99,
    discount: '20%',
    rating: 4,
    category: 'groceries',
  },
  {
    id: '6',
    name: 'Round Frame Sunglasses',
    images: ['/images/product-mock.png'],
    price: 139.99,
    originalPrice: 179.99,
    discount: '22%',
    rating: 4,
    category: 'groceries',
  },
];

export const PRODUCT_REVIEW: IProductReview[] = [
  {
    reviewerName: 'John Doe',
    reviewerEmail: 'johndoe@example.com',
    date: '2024-01-01',
    rating: 4.5,
    comment: 'Amazing product! Highly recommend.',
  },
  {
    reviewerName: 'Alice Johnson',
    reviewerEmail: 'alicej@example.com',
    date: '2024-01-02',
    rating: 5,
    comment: 'Absolutely fantastic product!',
  },
  {
    reviewerName: 'Bob Smith',
    reviewerEmail: 'bobsmith@example.com',
    date: '2024-01-03',
    rating: 4,
    comment: 'Great product, but the shipping was slow.',
  },
  {
    reviewerName: 'Charlie Brown',
    reviewerEmail: 'charlieb@example.com',
    date: '2024-01-04',
    rating: 3.5,
    comment: 'Good quality, but not worth the price.',
  },
];

export const CART_DATA: ICartItem[] = [
  {
    id: '2',
    title: 'Eyeshadow Palette with Mirror',
    price: 19.99,
    quantity: 3,
    total: 59.97,
    discountPercentage: 5.5,
    discountedTotal: 56.67164999999999,
    thumbnail:
      'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
  },
  {
    id: '1',
    title: 'Essence Mascara Lash Princess',
    price: 9.99,
    quantity: 1,
    total: 9.99,
    discountPercentage: 7.17,
    discountedTotal: 9.273717,
    thumbnail:
      'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
  },
  {
    id: '3',
    title: 'Powder Canister',
    price: 14.99,
    quantity: 2,
    total: 29.98,
    discountPercentage: 18.14,
    discountedTotal: 24.541628,
    thumbnail:
      'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
  },
];

export const ORDER_SUMMARY = {
  withData: {
    subtotal: 100,
    shippingFee: 10,
    couponValue: 20,
    total: 90,
  },
  emptyData: {
    subtotal: 0,
    shippingFee: 0,
    couponValue: 0,
    total: 0,
  },
};
