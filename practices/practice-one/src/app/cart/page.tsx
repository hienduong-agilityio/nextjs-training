import { QuantityControl } from '@/ui';
import Image from 'next/image';

const CartPage = async () => {
  const data = await fetch(
    'https://67185f91b910c6a6e02bdc00.mockapi.io/carts/5',
  );
  const posts = await data.json();

  console.log(posts.products);

  const cartData = {
    products: [
      {
        id: 1,
        title: 'Nike Airmax 270 React',
        price: 998,
        quantity: 2,
        unitPrice: 499,
        thumbnail: 'https://cdn.dummyjson.com/products/images/1/thumbnail.jpg', // Placeholder thumbnail
      },
      {
        id: 2,
        title: 'Nike Airmax 270 React',
        price: 998,
        quantity: 2,
        unitPrice: 499,
        thumbnail: 'https://cdn.dummyjson.com/products/images/2/thumbnail.jpg', // Placeholder thumbnail
      },
      {
        id: 2,
        title: 'Nike Airmax 270 React',
        price: 998,
        quantity: 2,
        unitPrice: 499,
        thumbnail: 'https://cdn.dummyjson.com/products/images/2/thumbnail.jpg', // Placeholder thumbnail
      },
      {
        id: 2,
        title: 'Nike Airmax 270 React',
        price: 998,
        quantity: 2,
        unitPrice: 499,
        thumbnail: 'https://cdn.dummyjson.com/products/images/2/thumbnail.jpg', // Placeholder thumbnail
      },
      {
        id: 2,
        title: 'Nike Airmax 270 React',
        price: 998,
        quantity: 2,
        unitPrice: 499,
        thumbnail: 'https://cdn.dummyjson.com/products/images/2/thumbnail.jpg', // Placeholder thumbnail
      },
      {
        id: 2,
        title: 'Nike Airmax 270 React',
        price: 998,
        quantity: 2,
        unitPrice: 499,
        thumbnail: 'https://cdn.dummyjson.com/products/images/2/thumbnail.jpg', // Placeholder thumbnail
      },
      {
        id: 2,
        title: 'Nike Airmax 270 React',
        price: 998,
        quantity: 2,
        unitPrice: 499,
        thumbnail: 'https://cdn.dummyjson.com/products/images/2/thumbnail.jpg', // Placeholder thumbnail
      },
    ],
    subtotal: 998,
    shippingFee: 20,
    coupon: 'No',
    total: 118,
  };

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
            {posts.products.map(
              (product: {
                id: number;
                thumbnail: string;
                title: string;
                price: number;
                unitPrice: number;
              }) => (
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
                    <QuantityControl />
                  </td>
                  <td className="px-4 py-4 text-right">${product.unitPrice}</td>
                </tr>
              ),
            )}
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
            <span>${cartData.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping fee:</span>
            <span>${cartData.shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Coupon:</span>
            <span>{cartData.coupon}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${cartData.total.toFixed(2)}</span>
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
