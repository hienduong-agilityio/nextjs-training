import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Enums
import { BUTTON_COLORS, BUTTON_VARIANTS } from '@/enums';

// Components
import Button from '..';

describe('Button Component', () => {
  let renderButton: (
    props?: Partial<React.ComponentProps<typeof Button>>,
  ) => ReturnType<typeof render>;

  beforeEach(() => {
    renderButton = (
      props: Partial<React.ComponentProps<typeof Button>> = {},
    ) => {
      return render(<Button {...props}>Test Button</Button>);
    };
  });

  it('renders with default props and matches snapshot', () => {
    const { container } = renderButton();
    const button = screen.getByRole('button', { name: /test button/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gray-200 text-black');
    expect(container).toMatchSnapshot();
  });

  it('renders with different BUTTON_VARIANTS', () => {
    const { rerender } = render(
      <Button variant={BUTTON_VARIANTS.SOLID}>Test Button</Button>,
    );
    expect(screen.getByRole('button', { name: /test button/i })).toHaveClass(
      'shadow-md',
    );

    rerender(<Button variant={BUTTON_VARIANTS.SHADOW}>Test Button</Button>);
    expect(screen.getByRole('button', { name: /test button/i })).toHaveClass(
      'shadow-lg',
    );

    rerender(<Button variant={BUTTON_VARIANTS.LIGHT}>Test Button</Button>);
    expect(screen.getByRole('button', { name: /test button/i })).toHaveClass(
      'bg-gray-200 bg-opacity-50',
    );
  });

  it('renders with different colors', () => {
    const { rerender } = render(
      <Button color={BUTTON_COLORS.PRIMARY}>Test Button</Button>,
    );
    expect(screen.getByRole('button', { name: /test button/i })).toHaveClass(
      'bg-primary-300',
    );

    rerender(<Button color={BUTTON_COLORS.SUCCESS}>Test Button</Button>);
    expect(screen.getByRole('button', { name: /test button/i })).toHaveClass(
      'bg-green-600',
    );

    rerender(<Button color={BUTTON_COLORS.DANGER}>Test Button</Button>);
    expect(screen.getByRole('button', { name: /test button/i })).toHaveClass(
      'bg-rose-500',
    );
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();
    renderButton({ onClick: handleClick });

    const button = screen.getByRole('button', { name: /test button/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with start and end icons', () => {
    renderButton({ startIcon: <span>Start</span>, endIcon: <span>End</span> });

    expect(screen.getByText(/start/i)).toBeInTheDocument();
    expect(screen.getByText(/end/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /test button/i }),
    ).toBeInTheDocument();
  });

  it('applies custom classes', () => {
    renderButton({ customClass: 'custom-class' });

    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveClass('custom-class');
  });

  it('renders disabled button', () => {
    renderButton({ disabled: true });

    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:bg-gray-100');
  });

  it('supports different button types', () => {
    renderButton({ type: 'submit' });

    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveAttribute('type', 'submit');
  });
});
