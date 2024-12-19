// Mock
import { CART_DATA } from '@/mocks';

// Components
import { OrderSummary, CartTable, VoucherInput } from '@/ui';

const CartPage = async () => {
  const products = CART_DATA ?? [];

  return (
    <div className="space-y-20 px-4 sm:px-6 lg:px-8">
      <CartTable products={products} />
      <section className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <VoucherInput />
        <OrderSummary />
      </section>
    </div>
  );
};

export default CartPage;
