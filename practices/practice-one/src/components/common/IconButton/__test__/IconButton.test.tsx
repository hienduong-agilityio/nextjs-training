import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { IconButton } from '@/components';

describe('IconButton Component', () => {
  let renderIconButton: (
    props?: Partial<React.ComponentProps<typeof IconButton>>,
  ) => ReturnType<typeof render>;
  let getButton: () => HTMLElement;

  beforeEach(() => {
    renderIconButton = (
      props: Partial<React.ComponentProps<typeof IconButton>> = {},
    ) => {
      return render(
        <IconButton {...props}>
          <span>Icon</span>
        </IconButton>,
      );
    };

    getButton = () => screen.getByRole('button', { name: /icon/i });
  });

  it('renders with default props and matches snapshot', () => {
    const { container } = renderIconButton();

    const button = getButton();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'flex items-center justify-center p-2 rounded-full border-2',
    );
    expect(button).toHaveClass(
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
    );
    expect(screen.getByText(/icon/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('applies custom classes', () => {
    renderIconButton({ customClass: 'custom-class' });

    const button = getButton();
    expect(button).toHaveClass('custom-class');
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();
    renderIconButton({ onClick: handleClick });

    const button = getButton();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders disabled button', () => {
    renderIconButton({ disabled: true });

    const button = getButton();
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });
});
