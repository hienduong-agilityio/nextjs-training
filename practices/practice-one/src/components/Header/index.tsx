import { Suspense } from 'react';

// Icon
import { CartIcon, LogoIcon, ProfileIcon } from '@/icons';

// Components
import { SearchBox, SearchModal } from '@/components';

interface IHeaderProps {
  cartItemCount?: number;
}

export const Header = ({ cartItemCount = 0 }: IHeaderProps) => {
  return (
    <header className="w-full md:container px-4 pt-6 md:mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-16 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <LogoIcon aria-label="logo" />
          <span className="text-lg font-bold w-max sm:text-xl lg:text-2xl">
            E-Comm
          </span>
        </a>

        {/* Profile, Cart, or Menu */}
        <div className="flex items-center justify-end w-full gap-4 lg:justify-between">
          {/* Search */}
          <div className="hidden lg:block">
            <Suspense fallback={<p>...Loading</p>}>
              <SearchBox
                customClass={{
                  container: 'md:justify-end',
                  input: 'w-full lg:w-[400px]',
                  inputContainer: 'border-primary-300',
                  button: 'bg-primary-300 text-white',
                }}
              />
            </Suspense>
          </div>

          {/* SearchBox */}
          <SearchModal />

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {/* Profile */}
              <ProfileIcon aria-label="profile" size={20} />
              <span className="hidden text-sm w-max md:text-base lg:text-lg lg:block">
                My account
              </span>
              <div className="relative flex items-center">
                {/* Cart */}
                <CartIcon
                  aria-label="cart"
                  size={25}
                  itemCount={cartItemCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
