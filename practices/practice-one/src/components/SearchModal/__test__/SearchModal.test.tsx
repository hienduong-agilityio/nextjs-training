import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Components
import { SearchModal } from '@/components';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useOptimistic: jest.fn(() => [false, jest.fn()]),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('SearchModal Component Tests', () => {
  const mockSetModalState = jest.fn();
  const mockRouterPush = jest.fn();

  const renderComponent = (modalOpen = false) => {
    (useState as jest.Mock).mockImplementation(() => [
      modalOpen,
      mockSetModalState,
    ]);
    return render(<SearchModal />);
  };

  const getButton = () => screen.getByRole('button');

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
    (useSearchParams as jest.Mock).mockReturnValue({ get: jest.fn(() => '') });
  });

  it('renders the search button and matches snapshot', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();

    const button = getButton();
    expect(button).toBeInTheDocument();
  });

  it('toggles modal open state when search button is clicked', () => {
    renderComponent();

    const button = getButton();
    fireEvent.click(button);

    expect(mockSetModalState).toHaveBeenCalledWith(true);
  });

  it('closes the modal upon submitting the search form', () => {
    renderComponent(true);

    const searchInput = screen.getByPlaceholderText('Enter your query...');
    fireEvent.change(searchInput, { target: { value: 'test search' } });

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockSetModalState).toHaveBeenCalledWith(false);
  });
});
