import { Meta, StoryObj } from '@storybook/react';
import {
  CartIcon,
  AlertIcon,
  FacebookIcon,
  FilterIcon,
  HeartIcon,
  MessageIcon,
  ProfileIcon,
  LogoIcon,
  Start,
  AddToCartIcon,
  ShippingIcon,
  RefundIcon,
  SupportIcon,
} from '@/icons/index';

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
    customClass: {
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
  },
};

export default meta;

type Story = StoryObj<{
  size: number;
  customClass: string;
  color: string;
  isStarred: boolean;
}>;

const IconGallery = ({
  size,
  customClass,
  color,
  isStarred,
}: {
  size?: number;
  customClass?: string;
  color?: string;
  isStarred?: boolean;
}) => (
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
            className={`w-[${size}px] h-[${size}px] ${customClass}`}
          />
        ) : (
          <IconComponent
            size={size}
            color={color}
            className={`w-[${size}px] h-[${size}px] ${customClass}`}
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
    customClass: '',
    isStarred: false,
  },
  render: (args) => (
    <IconGallery
      size={args.size}
      customClass={args.customClass}
      color={args.color}
      isStarred={args.isStarred}
    />
  ),
};
