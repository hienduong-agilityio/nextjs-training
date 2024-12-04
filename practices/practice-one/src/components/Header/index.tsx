// Icon
import {
  CartIcon,
  LogoIcon,
  ProfileIcon,
  SearchIcon,
  MenuGroupIcon,
} from '@/icons';

// Components
import { SearchBox } from '@/components';

interface IHeaderProps {
  cartItemCount?: number;
}

export const Header = ({ cartItemCount = 0 }: IHeaderProps) => {
  return (
    <header className="container flex gap-2 items-center justify-between w-full px-4 py-4 mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <LogoIcon aria-label="logo" />
        <span className="w-max text-lg font-bold sm:text-xl lg:text-2xl">
          E-Comm
        </span>
      </a>

      {/* Profile, Cart, or Menu */}
      <div className="w-3/4 flex items-center justify-end md:justify-between gap-4">
        {/* Search */}
        <div className="hidden md:block">
          <SearchBox
            customClass={{
              container: 'md:justify-end',
              input: 'w-full lg:w-[220px] xl:w-[520px]',
              inputContainer: 'border-primary-300',
              button: 'bg-primary-300 text-white',
            }}
          />
        </div>
        <div className="block md:hidden">
          <SearchIcon size={24} />
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            {/* Profile */}
            <ProfileIcon aria-label="profile" size={20} />
            <span className="hidden text-sm md:text-base lg:text-lg md:block">
              My account
            </span>
            <div className="relative flex items-center">
              {/* Cart */}
              <CartIcon aria-label="cart" size={25} itemCount={cartItemCount} />
            </div>
          </div>
          <div className="md:hidden">
            <MenuGroupIcon size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};
