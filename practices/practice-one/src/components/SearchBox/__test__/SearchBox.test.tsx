// Libraries
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { SearchBox, ISearchBoxProps } from '@/components';

const mockOnSearch = jest.fn();

let defaultProps: ISearchBoxProps;
let customClasses: Required<ISearchBoxProps>['customClass'];
let renderResult: RenderResult;

describe('SearchBox Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    defaultProps = {
      onSearch: mockOnSearch,
      placeholder: 'Enter your query...',
      customClass: {},
    };
    customClasses = {
      container: 'custom-container',
      inputContainer: 'custom-input-container',
      input: 'custom-input',
      button: 'custom-button',
    };
    renderResult = render(<SearchBox {...defaultProps} />);
  });

  it('renders the SearchBox component with default props', () => {
    const input = screen.getByPlaceholderText('Enter your query...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('h-16 w-[520px] text-gray-700');

    const button = screen.getByRole('button', { name: /Search/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('px-7 rounded-l-none');
  });

  it('renders with custom classes', () => {
    renderResult.rerender(
      <SearchBox {...defaultProps} customClass={customClasses} />,
    );

    const container = screen
      .getByPlaceholderText('Enter your query...')
      .closest('div');
    expect(container).toHaveClass('flex');

    const input = screen.getByPlaceholderText('Enter your query...');
    expect(input).toHaveClass('custom-input');

    const button = screen.getByRole('button', { name: /Search/i });
    expect(button).toHaveClass('custom-button');
  });

  it('handles user input in the InputField', () => {
    const input = screen.getByPlaceholderText('Enter your query...');
    fireEvent.change(input, { target: { value: 'Test query' } });
    expect(input).toHaveValue('Test query');
  });

  it('calls onSearch with the correct value when the button is clicked', () => {
    const input = screen.getByPlaceholderText('Enter your query...');
    fireEvent.change(input, { target: { value: 'Test query' } });

    const button = screen.getByRole('button', { name: /Search/i });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('Test query');
  });

  it('does not call onSearch if the input is empty', () => {
    const button = screen.getByRole('button', { name: /Search/i });
    fireEvent.click(button);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchSnapshot();
  });
});
