import { Meta, StoryObj } from '@storybook/react';
import {
  CartIcon,
  AlertIcon,
  FacebookIcon,
  TwitterIcon,
  FilterIcon,
  HeartIcon,
  MessageIcon,
  ProfileIcon,
  LogoIcon,
  Start,
  StarRating,
  AddToCartIcon,
  ShippingIcon,
  RefundIcon,
  SupportIcon,
  VisaIcon,
  WesternIcon,
  MasterCardIcon,
  PaypalIcon,
} from '@/icons/index';
import type { IIconProps } from '@/interfaces';

const icons = [
  { component: CartIcon, label: 'CartIcon' },
  { component: AlertIcon, label: 'AlertIcon' },
  { component: FacebookIcon, label: 'FacebookIcon' },
  { component: FilterIcon, label: 'FilterIcon' },
  { component: HeartIcon, label: 'HeartIcon' },
  { component: MessageIcon, label: 'MessageIcon' },
  { component: LogoIcon, label: 'LogoIcon' },
  { component: ProfileIcon, label: 'ProfileIcon' },
  { component: Start, label: 'StartIcon' },
  { component: AddToCartIcon, label: 'AddToCartIcon' },
  { component: ShippingIcon, label: 'ShippingIcon' },
  { component: RefundIcon, label: 'RefundIcon' },
  { component: SupportIcon, label: 'SupportIcon' },
  { component: WesternIcon, label: 'WesternIcon' },
  { component: MasterCardIcon, label: 'MasterCardIcon' },
  { component: PaypalIcon, label: 'PaypalIcon' },
  { component: VisaIcon, label: 'Visa' },
  { component: TwitterIcon, label: 'TwitterIcon' },
  { component: StarRating, label: 'StartRatingIcon' },
];

const meta: Meta = {
  title: 'Components/IconGallery',
  component: LogoIcon,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 10, max: 200, step: 1 },
      description: 'Numerical size in pixels for both width and height.',
      defaultValue: 44,
    },
    className: {
      control: { type: 'text' },
      description:
        'Custom CSS class for additional styles (e.g., margin, animations).',
    },
    color: {
      control: { type: 'color' },
      description: 'Set the icon color using a valid CSS color value.',
    },
    isStarred: {
      control: { type: 'boolean' },
      description:
        'Determines if the Start icon is starred (true) or unstarred (false).',
      defaultValue: false,
    },
    isStarred: {
      control: { type: 'boolean' },
      description:
        'Determines if the Start icon is starred (true) or unscarred (false).',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconGallery>;

const IconGallery = ({ size, className, color, isStarred }: IIconProps) => (
  <div className="grid grid-cols-6 gap-6 place-items-center">
    {icons.map(({ component: IconComponent, label }, index) => (
      <div
        key={index}
        className="flex flex-col items-center gap-2 cursor-pointer"
      >
        {label === 'StartIcon' ? (
          <IconComponent
            isStarred={isStarred}
            size={size}
            color={color}
            className={`w-[${size}px] h-[${size}px] ${className}`}
          />
        ) : (
          <IconComponent
            size={size}
            color={color}
            className={`w-[${size}px] h-[${size}px] ${className}`}
          />
        )}
        <span className="text-sm text-center">{label}</span>
      </div>
    ))}
  </div>
);

export const Default: Story = {
  args: {
    size: 44,
    className: '',
    isStarred: false,
  },
  render: (args) => (
    <IconGallery
      size={args.size}
      className={args.className}
      color={args.color}
      isStarred={args.isStarred}
    />
  ),
};
