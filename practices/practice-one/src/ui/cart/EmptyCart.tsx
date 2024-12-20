import Link from 'next/link';

// Constants
import { ROUTE } from '@/constants';

export const EmptyCart = () => (
  <div className="flex flex-col items-center gap-4 py-16">
    <p className="text-xl text-gray-600">Your cart is currently empty.</p>
    <Link
      href={ROUTE.COLLECTION}
      className="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg"
    >
      Continue Shopping
    </Link>
  </div>
);
