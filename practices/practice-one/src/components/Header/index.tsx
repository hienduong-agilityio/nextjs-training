// Icon
import { CartIcon, LogoIcon, ProfileIcon } from '@/icons';

// Components
import { SearchBox } from '@/components';

interface IHeaderProps {
  cartItemCount?: number;
}

export const Header = ({ cartItemCount = 0 }: IHeaderProps) => {
  return (
    <header className="container flex flex-wrap items-center w-full px-4 py-4 pb-6 mx-auto md:gap-8 md:justify-start xl:justify-between lg:pb-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 sm:py-6 md:py-8 lg:py-10 xl:py-12">
      <div className="flex flex-wrap gap-5 xl:justify-between lg:w-auto">
        <a href="/" className="flex items-center gap-2">
          {/* Logo */}
          <LogoIcon aria-label="logo" />
          <span className="text-lg font-bold sm:text-xl lg:text-2xl">
            E-Comm
          </span>
        </a>

        {/* Search Box */}
        <SearchBox
          customClass={{
            container: 'md:justify-end',
            input: 'w-full md:w-[400px] lg:w-[520px]',
            inputContainer: 'border-primary-300',
            button: 'bg-primary-300 text-white',
          }}
        />
      </div>

      <div className="flex items-center gap-4 mt-5 sm:gap-6 lg:mt-0">
        {/* Profile */}
        <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
          <ProfileIcon
            aria-label="profile"
            className="flex items-center"
            size={20}
          />
          <span>My account</span>
        </div>

        {/* Cart */}
        <div className="relative flex items-center">
          <CartIcon aria-label="cart" size={25} itemCount={cartItemCount} />
        </div>
      </div>
    </header>
  );
};
