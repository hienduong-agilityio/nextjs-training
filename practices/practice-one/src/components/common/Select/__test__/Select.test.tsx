import { render, screen } from '@testing-library/react';

// Components
import { Select } from '@/components';

// Constants
import { SORT_PRODUCT_OPTIONS } from '@/constants';

describe('Select Component', () => {
  const defaultProps = {
    options: SORT_PRODUCT_OPTIONS,
    defaultValue: 'name',
    customClass: 'custom-select-class',
    onChange: jest.fn(),
  };

  const renderSelect = (props = {}) =>
    render(<Select {...defaultProps} {...props} />);

  const getSelect = () => screen.getByRole('combobox');

  beforeEach(() => {
    defaultProps.onChange.mockClear();
  });

  it('matches snapshot with default props', () => {
    const { asFragment } = renderSelect();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with default props', () => {
    renderSelect();

    const select = getSelect();
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass('border text-sm rounded px-3 py-2');
    expect(select).toHaveValue(defaultProps.defaultValue);
    expect(select).toHaveClass(defaultProps.customClass);

    defaultProps.options.forEach((option) => {
      const optionElement = screen.getByText(option);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement.tagName).toBe('OPTION');
      expect(optionElement).toHaveValue(option);
    });
  });

  it('handles an empty options array', () => {
    renderSelect({ options: [] });

    const select = getSelect();

    expect(select).toBeInTheDocument();
    expect(select.children.length).toBe(0);
  });

  it('applies custom classes to the select element', () => {
    const customClass = 'custom-select';
    renderSelect({ customClass });

    const select = getSelect();
    expect(select).toHaveClass(customClass);
  });

  it('sets the default value correctly', () => {
    renderSelect({ defaultValue: 'price' });

    const select = getSelect();
    expect(select).toHaveValue('price');
  });
});
