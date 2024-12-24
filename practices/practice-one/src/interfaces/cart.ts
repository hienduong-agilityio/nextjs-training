export interface ICartItem {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage?: number;
  discountedTotal?: number;
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

export interface ICartModifyPayload {
  productId: string;
  quantity: number;
}
