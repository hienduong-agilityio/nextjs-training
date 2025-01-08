import { render, screen } from '@testing-library/react';

// UI
import { VoucherInput } from '@/ui';

describe('VoucherInput Component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<VoucherInput />);
    expect(container).toMatchSnapshot();
  });

  it('renders the InputGroup with the default props and aria-label', () => {
    render(<VoucherInput />);

    const inputGroup = screen.getByLabelText('Input Group');
    expect(inputGroup).toBeInTheDocument();

    const searchIcon = screen.getByLabelText('Search');
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveClass('lg:hidden block');
  });

  it('renders with a custom placeholder', () => {
    const customPlaceholder = 'Enter your voucher code';
    render(<VoucherInput placeholder={customPlaceholder} />);

    const inputGroup = screen.getByLabelText('Input Group');
    expect(inputGroup).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText(customPlaceholder);
    expect(inputElement).toBeInTheDocument();
  });
});
