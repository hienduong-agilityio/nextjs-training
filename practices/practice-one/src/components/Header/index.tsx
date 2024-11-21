// Icon
import { CartIcon, LogoIcon, ProfileIcon } from '@/icons';

// Components
import { SearchBox } from '@/components';

interface IHeaderProps {
  cartItemCount?: number;
}

export const Header = ({ cartItemCount = 0 }: IHeaderProps) => {
  return (
    <header className="flex flex-wrap md:gap-8 items-center md:justify-center xl:justify-between w-full pb-6 lg:pb-12">
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
