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
    <header className="flex items-center justify-between w-full gap-6 px-4 py-4 md:container md:mt-10 md:mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <LogoIcon aria-label="logo" />
        <span className="w-max text-lg font-bold sm:text-xl lg:text-2xl">
          E-Comm
        </span>
      </a>

      {/* Profile, Cart, or Menu */}
      <div className="w-full flex items-center justify-end lg:justify-between gap-4">
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
              <CartIcon aria-label="cart" size={25} itemCount={cartItemCount} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
