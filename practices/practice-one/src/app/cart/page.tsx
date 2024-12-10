import { ICartItem } from '@/interfaces';
import { getCartByUserId } from '@/services/cart';
import { QuantityControl } from '@/ui';
import Image from 'next/image';

const CartPage = async () => {
  const userId = 134;

  const cartData = await getCartByUserId(userId);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-sm font-semibold text-gray-600">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3 text-right">Price</th>
              <th className="px-4 py-3 text-right">Qty</th>
              <th className="px-4 py-3 text-right">Unit Price</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {cartData?.products.map((product: ICartItem) => (
              <tr key={product.id}>
                <td className="px-4 py-4 flex items-center">
                  <button className="text-red-500 mr-4">&times;</button>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={60}
                    height={60}
                    className="rounded border"
                  />
                  <span className="ml-4">{product.title}</span>
                </td>
                <td className="px-4 py-4 text-right">${product.price}</td>
                <td className="px-4 py-4 text-right flex justify-end items-center space-x-2">
                  <QuantityControl productId={product.id} userId={userId} />
                </td>
                <td className="px-4 py-4 text-right">${product.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-1/2">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Voucher code"
              className="flex-grow px-4 py-2 border-r focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-2">Redeem</button>
          </div>
        </div>
        <div className="w-1/3 space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            {/* <span>${cartData.subtotal.toFixed(2)}</span> */}
          </div>
          <div className="flex justify-between">
            <span>Shipping fee:</span>
            {/* <span>${cartData.shippingFee.toFixed(2)}</span> */}
          </div>
          <div className="flex justify-between">
            <span>Coupon:</span>
            {/* <span>{cartData.coupon}</span> */}
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            {/* <span>${cartData.total.toFixed(2)}</span> */}
          </div>
          <button className="bg-blue-500 text-white w-full py-2 rounded-lg">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
