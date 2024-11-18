// Icon
import { CartIcon, LogoIcon, ProfileIcon } from '@/icons';

// Components
import { SearchBox } from '@/components';

export const Header = () => {
  return (
    <header className="flex justify-between w-full py-12">
      <div className="flex items-center gap-2">
        <LogoIcon />
        <span className="text-lg font-bold">E-Comm</span>
      </div>
      <SearchBox />
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <ProfileIcon className="flex items-center" size={20} />
          <span>My account</span>
        </div>
        <CartIcon size={25} itemCount={2} />
      </div>
    </header>
  );
};
