// Interfaces
import type { ICartItem } from '@/interfaces/cart';

// Components
import { CartEmptyProduct, CartItem } from '@/ui';

interface ICartTableProps {
  products: ICartItem[];
  isEmpty: boolean;
}

const cartTableHeaders = [
  { label: 'Product', className: '' },
  { label: 'Price', className: 'text-center' },
  { label: 'Qty', className: 'text-center' },
  { label: 'Unit Price', className: 'text-center' },
];

const CartTable = ({ products, isEmpty }: ICartTableProps) => {
  return (
    <section className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="text-sm uppercase border-b-2 border-secondary-100">
          <tr>
            {cartTableHeaders.map((header) => (
              <th
                key={header.label}
                className={`px-4 py-3 font-medium ${header.className || ''}`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y-2 border-b-2 border-secondary-100 divide-secondary-100">
          {!isEmpty ? (
            products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <CartEmptyProduct />
          )}
        </tbody>
      </table>
    </section>
  );
};

export default CartTable;
