import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { InputGroup } from '@/components';

// Mocks
const mockOnSubmit = jest.fn();

describe('InputGroup Component', () => {
  const defaultProps = {
    value: '',
    placeholder: 'Enter your query...',
    buttonText: 'Search',
    inputName: 'inputField',
    isDisabled: false,
    isLoading: false,
    customClass: {},
    onSubmit: mockOnSubmit,
  };

  const renderInputGroup = (props = {}) =>
    render(<InputGroup {...defaultProps} {...props} />);

  const getInput = () => screen.getByPlaceholderText(defaultProps.placeholder);
  const getButton = () =>
    screen.getByRole('button', { name: defaultProps.buttonText });
  const getForm = () => screen.getByRole('form');

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('matches snapshot with default props', () => {
    const { asFragment } = renderInputGroup();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with default props', () => {
    renderInputGroup();

    const input = getInput();
    const button = getButton();

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', defaultProps.inputName);
    expect(input).toHaveValue(defaultProps.value);
    expect(input).not.toBeDisabled();

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(defaultProps.buttonText);
    expect(button).not.toBeDisabled();
  });

  it('renders with custom classes', () => {
    const customClass = {
      container: 'custom-container',
      inputContainer: 'custom-input-container',
      input: 'custom-input',
    };

    renderInputGroup({ customClass });

    const form = getForm();
    const input = getInput();

    expect(form).toHaveClass(customClass.container);
    expect(input).toHaveClass(
      `h-14 text-gray-700 appearance-none ${customClass.input}`,
    );
  });

  it('disables input and button when `isDisabled` is true', () => {
    renderInputGroup({ isDisabled: true });

    const input = getInput();
    const button = getButton();

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });

  it('disables button and shows loading state when `isLoading` is true', () => {
    renderInputGroup({ isLoading: true });

    const button = getButton();

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('handles form submission', () => {
    renderInputGroup();

    const form = getForm();
    fireEvent.submit(form);

    const input = getInput();
    fireEvent.change(input, { target: { value: 'New value' } });

    expect(input).toHaveValue('New value');
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('renders start icon if provided', () => {
    const startIcon = <span data-testid="start-icon">Icon</span>;
    renderInputGroup({ startIcon });

    const icon = screen.getByTestId('start-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent('Icon');
  });
});
