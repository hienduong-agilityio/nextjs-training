// Components
import { Button, InputField } from '@/components';

// Enums
import { BUTTON_COLORS, BUTTON_VARIANTS } from '@/enums';

const CartVoucher = ({ placeholder = 'Voucher code' }) => {
  return (
    <div className="flex h-14">
      <InputField
        placeholder={placeholder}
        disabled
        customClass={{
          container: 'border-2 border-secondary-100 rounded-r-none h-full  ',
          input: `text-gray-700 appearance-none cursor-not-allowed`,
        }}
      />
      <Button
        disabled
        customClass="px-7 rounded-l-none hidden lg:block cursor-not-allowed shadow-none"
        type="submit"
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.SOLID}
      >
        Redeem
      </Button>
    </div>
  );
};

export default CartVoucher;
