// Libraries
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Component
import { SearchBox } from '@/components';

describe('SearchBox Component', () => {
  it('renders the SearchBox component', () => {
    const { asFragment } = render(<SearchBox />);

    const input = screen.getByPlaceholderText('SearchBox query...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('h-16 w-[520px] text-gray-700');

    const button = screen.getByRole('button', { name: /SearchBox/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('px-7 rounded-l-none');

    expect(asFragment()).toMatchSnapshot();
  });

  it('handles user input in the InputField', () => {
    render(<SearchBox />);

    const input = screen.getByPlaceholderText('SearchBox query...');
    fireEvent.change(input, { target: { value: 'Test query' } });
    expect(input).toHaveValue('Test query');
  });
});
