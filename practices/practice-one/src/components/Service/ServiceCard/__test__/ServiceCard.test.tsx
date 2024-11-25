// Libraries
import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';

// Components
import { IServiceCardProps, ServiceCard } from '@/components';

describe('ServiceCard Component', () => {
  const defaultProps: IServiceCardProps = {
    icon: '🔧',
    title: 'Test Service',
    details: 'This is a test description for the service.',
  };

  let renderResult: (props?: Partial<IServiceCardProps>) => RenderResult;

  beforeEach(() => {
    renderResult = (props = defaultProps) =>
      render(<ServiceCard {...defaultProps} {...props} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderResult();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the ServiceCard component with default props', () => {
    renderResult();

    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test description for the service.'),
    ).toBeInTheDocument();

    const icon = screen.getByLabelText('Icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent('🔧');
  });

  it('renders minimal props', () => {
    renderResult({
      title: 'Minimal Service',
      details: 'Minimal details.',
    });

    expect(screen.getByText('Minimal Service')).toBeInTheDocument();
    expect(screen.getByText('Minimal details.')).toBeInTheDocument();
  });

  it('renders custom icon properly', () => {
    renderResult({
      icon: '🚀',
      title: 'Rocket Service',
      details: 'Out-of-this-world service.',
    });

    const icon = screen.getByLabelText('Icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent('🚀');
    expect(screen.getByText('Rocket Service')).toBeInTheDocument();
    expect(screen.getByText('Out-of-this-world service.')).toBeInTheDocument();
  });
});
