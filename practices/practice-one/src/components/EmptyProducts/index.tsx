import Link from 'next/link';

export const EmptyProducts = ({
  message,
  actionLabel,
  actionHref,
}: {
  message: string;
  actionLabel: string;
  actionHref: string;
}) => (
  <div className="flex flex-col items-center gap-4 py-16">
    <p className="text-xl text-gray-600">{message}</p>
    <Link
      href={actionHref}
      className="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg"
    >
      {actionLabel}
    </Link>
  </div>
);
