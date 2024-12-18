// Interfaces
import type { ICartItem } from '@/interfaces';

// Components
import { EmptyProducts } from '@/components';
import { CartItemRow } from '@/ui';

interface ICartTableProps {
  products: ICartItem[];
}

const cartTableHeaders = [
  { label: 'Product', className: 'px-16 py-3' },
  { label: 'Price', className: 'px-4' },
  { label: 'Qty', className: 'px-4' },
  { label: 'Unit Price', className: 'px-4' },
];

const CartTable = ({ products }: ICartTableProps) => {
  const isCartEmpty = products.length === 0;

  return (
    <section className="overflow-x-auto">
      <table className="w-full text-left border-collapse table-auto">
        <thead className="text-sm uppercase border-b-2 border-secondary-100">
          <tr>
            {cartTableHeaders.map((header) => (
              <th
                key={header.label}
                className={`text-xl font-medium whitespace-nowrap ${header.className || ''}`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y-2 border-b-2 border-secondary-100 divide-secondary-100">
          {!isCartEmpty ? (
            products.map((product) => (
              <CartItemRow key={product.id} product={product} />
            ))
          ) : (
            <tr>
              <td colSpan={4}>
                <EmptyProducts
                  message="Your cart is currently empty."
                  actionLabel="Continue Shopping"
                  actionHref="/collection"
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default CartTable;
