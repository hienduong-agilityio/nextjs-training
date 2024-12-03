// Icons
import { AddToCartIcon, HeartIcon } from '@/icons';

// Components
import { Button } from '@/components';

export const CartAndFavoriteActions = () => {
  return (
    <div className="flex gap-5">
      <Button
        startIcon={<AddToCartIcon size={20} />}
        customClass="shadow-none bg-primary-50 text-primary-100 hover:bg-primary-50 hover:text-primary-200"
      >
        Add To Cart
      </Button>
      <Button customClass="shadow-none p-4 bg-primary-50 hover:bg-danger-50">
        <HeartIcon size={24} />
      </Button>
    </div>
  );
};
