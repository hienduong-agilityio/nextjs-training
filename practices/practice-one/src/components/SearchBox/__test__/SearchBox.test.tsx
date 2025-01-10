import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';

// Components
import { SearchBox } from '@/components';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useOptimistic: jest.fn(() => [false, jest.fn()]),
  startTransition: jest.fn((callback) => callback()),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('SearchBox Component - handleSearch function', () => {
  const mockPush = jest.fn();
  const mockOnCloseModal = jest.fn();

  const renderSearchBox = (props = {}) => {
    const component = render(<SearchBox {...props} />);

    const input = screen.getByPlaceholderText('Enter your query...');
    const form = screen.getByRole('form');

    return { component, input, form };
  };

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn(() => ''),
    });
  });

  it('renders the component correctly and matches snapshot', () => {
    const { component } = renderSearchBox();
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders with onCloseModal prop and matches snapshot', () => {
    const { component } = renderSearchBox({ onCloseModal: mockOnCloseModal });
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('calls handleSearch and updates the router with the correct query parameters', () => {
    const { input, form } = renderSearchBox();
    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.submit(form);

    expect(mockPush).toHaveBeenCalledWith('/collection?search=test+query');
  });

  it('trims search value before using it in the query', () => {
    const { input, form } = renderSearchBox();

    fireEvent.change(input, { target: { value: 'spaced query' } });
    fireEvent.submit(form);

    expect(mockPush).toHaveBeenCalledWith('/collection?search=spaced+query');
  });

  it('calls onCloseModal if provided', () => {
    const { input, form } = renderSearchBox({ onCloseModal: mockOnCloseModal });

    fireEvent.change(input, { target: { value: 'query' } });
    fireEvent.submit(form);

    expect(mockOnCloseModal).toHaveBeenCalled();
  });

  it('does not call onCloseModal if not provided', () => {
    const { input, form } = renderSearchBox();

    fireEvent.change(input, { target: { value: 'query' } });
    fireEvent.submit(form);

    expect(mockPush).toHaveBeenCalledWith('/collection?search=query');
  });
});
