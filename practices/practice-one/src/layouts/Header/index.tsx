import { Suspense } from 'react';

// Icon
import { CartIcon, LogoIcon, ProfileIcon } from '@/icons';

// Components
import { SearchBox, SearchModal } from '@/components';
import Link from 'next/link';

// Constants
import { ROUTE } from '@/constants';

// Services
import { getCartByUserId } from '@/services';

export const Header = async () => {
  const userId = 134;
  const cartProduct = await getCartByUserId(userId);

  return (
    <header className="w-full md:container px-4 pt-6 md:mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-16 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href={ROUTE.PRODUCTS} className="flex items-center gap-2">
          <LogoIcon aria-label="logo" />
          <span className="text-lg font-bold w-max sm:text-xl lg:text-2xl">
            E-Comm
          </span>
        </Link>

        {/* Profile, Cart, or Menu */}
        <div className="flex items-center justify-end w-full gap-4 lg:justify-between">
          {/* Search */}
          <div className="hidden lg:block w-full xl:w-[648px]">
            <Suspense fallback={<p>...Loading</p>}>
              <SearchBox
                customClass={{
                  container: 'md:justify-end',
                  inputContainer: 'border-primary-200',
                }}
              />
            </Suspense>
          </div>

          {/* SearchBox */}
          <SearchModal />

          <div className="flex items-center gap-5">
            {/* Profile */}
            <div className="flex items-center gap-2 cursor-not-allowed">
              <ProfileIcon aria-label="profile" size={20} />
              <span className="hidden text-sm w-max md:text-base lg:text-lg lg:block">
                My account
              </span>
            </div>
            <div className="relative flex items-center">
              {/* Cart */}
              <Link href={ROUTE.CART}>
                <CartIcon
                  aria-label="cart"
                  size={30}
                  itemCount={cartProduct?.products.length ?? 0}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
