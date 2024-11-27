// Components
import { ProductCard } from '@/components';

// Services
import { getProducts } from '@/services';

export default async function CollectionPage() {
  const productData = await getProducts({ page: 1, limit: 6 });

  return (
    <>
      {productData.map((product) => (
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
