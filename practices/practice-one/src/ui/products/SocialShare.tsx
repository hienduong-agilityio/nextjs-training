// Icons
import { FacebookIcon, TwitterIcon } from '@/icons';

// Components
import { Button } from '@/components';

export const SocialShare = () => {
  return (
    <div className="flex flex-col gap-4 mt-8 md:flex-row">
      <Button
        startIcon={<FacebookIcon color="#fff" />}
        customClass="flex-1 py-3 px-6 bg-lightBlue-800 text-white hover:bg-lightBlue-900"
      >
        Share on Facebook
      </Button>
      <Button
        startIcon={<TwitterIcon color="#fff" />}
        customClass="flex-1 py-3 px-6 bg-sky-400 text-white hover:bg-sky-500"
      >
        Share on Twitter
      </Button>
    </div>
  );
};
