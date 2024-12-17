import Link from 'next/link';

export const CartEmptyProduct = () => (
  <tr>
    <td colSpan={4} className="py-16 text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl text-gray-600">Your cart is currently empty.</p>
        <Link
          href="/collection"
          className="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    </td>
  </tr>
);
