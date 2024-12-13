import { Category } from '@/types/category';

type HotDeal = {
  name: Category | 'all';
  count: number;
};

export const HOT_DEALS: HotDeal[] = [
  { name: 'all', count: 2 },
  { name: 'beauty', count: 2 },
  { name: 'fragrances', count: 48 },
  { name: 'furniture', count: 95 },
  { name: 'groceries', count: 23 },
];

export const BRANDS = [
  { name: 'Nike', count: 99 },
  { name: 'Adidas', count: 99 },
  { name: 'Siemens', count: 99 },
];

export const FILTER_GROUP = [{ title: 'Hot Deals', items: HOT_DEALS }];
