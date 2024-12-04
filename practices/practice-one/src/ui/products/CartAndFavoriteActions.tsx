// Icons
import { AddToCartIcon, HeartIcon } from '@/icons';

// Components
import { Button } from '@/components';

export const CartAndFavoriteActions = () => {
  return (
    <div className="flex gap-5">
      {/* Add to Cart Button */}
      <Button
        startIcon={
          <AddToCartIcon
            size={20}
            color="currentColor"
            className="text-primary-100 group-hover:text-white transition-colors duration-200"
          />
        }
        customClass="group flex items-center justify-center shadow-none bg-primary-50 text-primary-100 hover:bg-primary-100 hover:text-white transition-all duration-200"
      >
        Add To Cart
      </Button>

      {/* Favorite Button */}
      <Button customClass="group flex items-center justify-center shadow-none p-4 bg-primary-50 hover:bg-danger-50 transition-all duration-200">
        <HeartIcon
          size={24}
          color="currentColor"
          className="text-primary-100 group-hover:text-white transition-colors duration-200"
        />
      </Button>
    </div>
  );
};
