import Link from 'next/link';

// Constants
import { ROUTE, STATUS_TYPES } from '@/constants';

// Icons
import { CheckMarkIcon, WarningIcon } from '@/icons';

const messages = {
  success: {
    icon: <CheckMarkIcon type="alternate" size={88} color="#40BFFF" />,
    title: 'Your order is successfully placed',
    description:
      'Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.',
    link: ROUTE.PRODUCTS,
    linkText: 'Back to home page',
  },
  error: {
    icon: <WarningIcon size={88} color="#FF4040" />,
    title: 'There was an issue with your order',
    description: 'Please try again or contact customer support for assistance.',
    link: ROUTE.CART,
    linkText: 'Back to cart page',
  },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams?: {
    status?: string;
  };
}) {
  const status = searchParams?.status;
  const isSuccess = status === STATUS_TYPES.SUCCESS;

  const { icon, title, description, link, linkText } = isSuccess
    ? messages.success
    : messages.error;

  return (
    <section className="flex flex-col items-center justify-center h-[50vh] gap-5 px-4 text-center sm:px-6 md:px-8">
      {icon}
      <h1 className="text-xl font-semibold text-gray-800 sm:text-2xl">
        {title}
      </h1>
      <p className="max-w-xs text-sm font-normal leading-6 text-gray-500 sm:text-base sm:max-w-md md:max-w-lg">
        {description}
      </p>
      <Link
        href={link}
        className="w-full px-6 py-4 mt-6 text-base font-medium text-white transition rounded-md sm:w-3/4 md:w-1/2 lg:w-1/3 bg-primary-100 sm:text-lg hover:bg-primary-200"
      >
        {linkText}
      </Link>
    </section>
  );
}
