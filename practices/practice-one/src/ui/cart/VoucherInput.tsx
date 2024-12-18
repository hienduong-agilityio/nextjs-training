// Components
import { InputGroup } from '@/components';

// Icons
import { SearchIcon } from '@/icons';

export const VoucherInput = ({ placeholder = 'Voucher code' }) => {
  return (
    <InputGroup
      placeholder={placeholder}
      startContent={<SearchIcon color="#40BFFF" className="lg:hidden block" />}
      buttonText="Redeem"
      isDisabled
      customClass={{
        container: 'flex h-14',
        inputContainer: 'border-2 border-secondary-100 rounded-r-none h-full',
        input: 'text-gray-700 appearance-none cursor-not-allowed',
        button: 'px-7 rounded-l-none hidden lg:block shadow-none',
      }}
    />
  );
};
