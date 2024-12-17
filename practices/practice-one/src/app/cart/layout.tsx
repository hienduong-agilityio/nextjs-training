export const metadata = {
  title: 'E-comm - Cart',
  description: `E-Comm Let's buy 🤑.`,
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="px-4 py-6">{children}</section>;
}
