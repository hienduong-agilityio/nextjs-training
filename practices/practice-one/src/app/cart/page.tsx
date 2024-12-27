// Services
import { getCartByUserId } from '@/services';

// Components
import { OrderSummary, CartTable, VoucherInput } from '@/ui';

// Constants
import { DEFAULT_USER_ID } from '@/constants';

// Helpers
import { calculateOrderSummary } from '@/helpers';

const CartPage = async () => {
  const cartProduct = await getCartByUserId(DEFAULT_USER_ID);

  const cartSummary = calculateOrderSummary(cartProduct.products);

  return (
    <div className="space-y-20 px-4 sm:px-6 lg:px-8">
      <CartTable products={cartProduct.products} />
      <section className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <VoucherInput />
        <OrderSummary summary={cartSummary} />
      </section>
    </div>
  );
};

export default CartPage;
