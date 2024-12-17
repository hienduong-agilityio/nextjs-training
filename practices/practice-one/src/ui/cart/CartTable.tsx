// Interfaces
import type { ICartItem } from '@/interfaces/cart';

// Components
import { CartEmptyProduct, CartItem } from '@/ui';

interface ICartTableProps {
  products: ICartItem[];
  isEmpty: boolean;
}

const cartTableHeaders = [
  { label: 'Product', className: 'px-16 py-3' },
  { label: 'Price', className: 'text-start px-4' },
  { label: 'Qty', className: 'text-start px-4' },
  { label: 'Unit Price', className: 'text-start px-4' },
];

const CartTable = ({ products, isEmpty }: ICartTableProps) => {
  return (
    <section className="overflow-x-auto">
      <table className="w-full text-left border-collapse table-auto">
        <thead className="text-sm uppercase border-b-2 border-secondary-100">
          <tr>
            {cartTableHeaders.map((header) => (
              <th
                key={header.label}
                className={`text-xl font-medium ${header.className || ''}`}
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
