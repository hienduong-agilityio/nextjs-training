// Services
import { getCartByUserId } from '@/services';

// Components
import { OrderSummary, CartTable, VoucherInput } from '@/ui';

const CartPage = async () => {
  const userId = 134;
  const cartProduct = await getCartByUserId(userId);

  return (
    <div className="space-y-20 px-4 sm:px-6 lg:px-8">
      <CartTable products={cartProduct.products} />
      <section className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <VoucherInput />
        <OrderSummary />
      </section>
    </div>
  );
};

export default CartPage;
