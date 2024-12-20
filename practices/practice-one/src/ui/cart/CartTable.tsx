// Interfaces
import type { ICartItem } from '@/interfaces';

// Components
import { CartItemRow, EmptyCart } from '@/ui';

interface ICartTableProps {
  products: ICartItem[];
}

const cartTableHeaders = [
  { label: 'Product', className: 'px-16 py-3' },
  { label: 'Price', className: 'px-4' },
  { label: 'Qty', className: 'px-4' },
  { label: 'Unit Price', className: 'px-4' },
];

// TODO: Cart should be a layout
export const CartTable = ({ products }: ICartTableProps) => {
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
          {isCartEmpty ? (
            <tr>
              <td colSpan={4}>
                <EmptyCart />
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <CartItemRow key={product.id} {...product} />
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};
