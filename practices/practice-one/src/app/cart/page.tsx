// Services
import { getCartByUserId } from '@/services';

// Components
import { CartSummary, CartTable, CartVoucher } from '@/ui';

const CartPage = async () => {
  const userId = 134;
  const cartData = await getCartByUserId(userId);

  const products = cartData?.products ?? [];
  const isEmpty = products.length === 0;

  return (
    <div className="space-y-20 px-4 sm:px-6 lg:px-8">
      <CartTable products={products} isEmpty={isEmpty} />
      <section className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <CartVoucher />
        <CartSummary />
      </section>
    </div>
  );
};

export default CartPage;
