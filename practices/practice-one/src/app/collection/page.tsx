import { ProductCard } from '@/components';
import { PRODUCTS_DATA } from '@/mocks';

export default function ProductPage() {
  return (
    <>
      {PRODUCTS_DATA.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
          rating={product.rating}
        />
      ))}
    </>
  );
}
