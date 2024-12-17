export interface ICartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface ICart {
  id: string;
  products: ICartItem[];
  total?: number;
  discountedTotal?: number;
  userId: number;
  totalProducts?: number;
  totalQuantity?: number;
}
