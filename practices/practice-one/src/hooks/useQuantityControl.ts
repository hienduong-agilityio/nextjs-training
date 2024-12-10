import { useState, useEffect } from 'react';
import { getProductById, getCartByUserId } from '@/services';
import type { IQuantityControlProps } from '@/ui/products/QuantityControl';

export function useQuantityControl({
  productId,
  userId,
}: IQuantityControlProps) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [maxQuantity, setMaxQuantity] = useState<number>(Infinity);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const product = await getProductById(productId);
        const minimumOrderQuantity = product.minimumOrderQuantity || Infinity;

        const cart = await getCartByUserId(userId);
        const productInCart = cart?.products.find(
          (item) => item.id === productId,
        );

        const productInCartQuantity = productInCart?.quantity || 0;

        const availableQuantity = Math.max(
          0,
          minimumOrderQuantity - productInCartQuantity,
        );

        setQuantity(productInCart?.quantity || 1);
        setMaxQuantity(
          availableQuantity > 0 ? availableQuantity : minimumOrderQuantity,
        );
      } catch (error) {
        setQuantity(1);
        setMaxQuantity(Infinity);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productId, userId]);

  const increment = () => {
    setQuantity((prev) => Math.min(maxQuantity, prev + 1));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleInputChange = (value: string) => {
    const numericValue = parseInt(value, 10);
    setQuantity(Math.min(maxQuantity, Math.max(1, numericValue || 1)));
  };

  return { quantity, isLoading, increment, decrement, handleInputChange };
}
