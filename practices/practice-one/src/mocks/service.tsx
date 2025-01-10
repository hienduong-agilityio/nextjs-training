import { RefundIcon, ShippingIcon, SupportIcon } from '@/icons';

export const serviceData = [
  {
    title: 'FREE SHIPPING',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <ShippingIcon size={100} className="w-24 h-24" />,
  },
  {
    title: '100% REFUND',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <RefundIcon size={100} />,
  },
  {
    title: 'SUPPORT 24/7',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <SupportIcon size={100} />,
  },
];

export const SERVICE_CARD = {
  default: {
    icon: '🔧',
    title: 'Default Service',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  customIcon: {
    icon: '🚀',
    title: 'Rocket Service',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  withoutIcon: {
    title: 'Icon-Free Service',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
};
