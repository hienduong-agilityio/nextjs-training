// Libraries
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter, useSearchParams } from 'next/navigation';

// Components
import SearchBox from '@/components/SearchBox';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('SearchBox Component', () => {
  const mockPush = jest.fn();
  const mockSearchParams = new URLSearchParams();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<SearchBox />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the SearchBox component with default props', () => {
    render(<SearchBox />);
    const input = screen.getByPlaceholderText('Enter your query...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('h-16 text-gray-700');

    const button = screen.getByRole('button', { name: /Search/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('px-7 rounded-l-none');
  });

  it('renders with custom classes', () => {
    const customClasses = {
      container: 'custom-container',
      inputContainer: 'custom-input-container',
      input: 'custom-input',
      button: 'custom-button',
    };

    render(<SearchBox customClass={customClasses} />);

    const container = screen
      .getByPlaceholderText('Enter your query...')
      .closest('div');
    expect(container).toHaveClass('flex items-center gap-1');

    const input = screen.getByPlaceholderText('Enter your query...');
    expect(input).toHaveClass('custom-input');

    const button = screen.getByRole('button', { name: /Search/i });
    expect(button).toHaveClass('custom-button');
  });

  it('handles user input in the InputField', () => {
    render(<SearchBox />);
    const input = screen.getByPlaceholderText('Enter your query...');
    fireEvent.change(input, { target: { value: 'Test query' } });
    expect(input).toHaveValue('Test query');
  });

  it('performs search on button click', () => {
    render(<SearchBox />);
    const input = screen.getByPlaceholderText('Enter your query...');
    const button = screen.getByRole('button', { name: /Search/i });

    fireEvent.change(input, { target: { value: 'Test query' } });
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith('/collection?name=Test+query');
  });

  it('does not perform search if input is empty', () => {
    render(<SearchBox />);
    const button = screen.getByRole('button', { name: /Search/i });

    fireEvent.click(button);

    expect(mockPush).not.toHaveBeenCalled();
  });

  it('appends search query to existing parameters', () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams('category=bags'),
    );

    render(<SearchBox />);
    const input = screen.getByPlaceholderText('Enter your query...');
    const button = screen.getByRole('button', { name: /Search/i });

    fireEvent.change(input, { target: { value: 'Test query' } });
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith(
      '/collection?category=bags&name=Test+query',
    );
  });
});
