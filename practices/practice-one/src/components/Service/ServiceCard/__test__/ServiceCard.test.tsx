// Libraries
import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';

// Components
import { IServiceCardProps, ServiceCard } from '@/components';

// Constants
import { SERVICE_CARD } from '@/mocks';

describe('ServiceCard Component', () => {
  let renderResult: (props?: Partial<IServiceCardProps>) => RenderResult;

  beforeEach(() => {
    renderResult = (props = SERVICE_CARD.default) =>
      render(<ServiceCard {...SERVICE_CARD.default} {...props} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderResult();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the ServiceCard component with default props', () => {
    renderResult();

    expect(screen.getByText(SERVICE_CARD.default.title)).toBeInTheDocument();
    expect(screen.getByText(SERVICE_CARD.default.details)).toBeInTheDocument();

    const icon = screen.getByLabelText('Icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent(SERVICE_CARD.default.icon);
  });

  it('renders minimal props', () => {
    renderResult(SERVICE_CARD.withoutIcon);

    expect(
      screen.getByText(SERVICE_CARD.withoutIcon.title),
    ).toBeInTheDocument();
    expect(
      screen.getByText(SERVICE_CARD.withoutIcon.details),
    ).toBeInTheDocument();
  });

  it('renders custom icon properly', () => {
    renderResult(SERVICE_CARD.customIcon);

    const icon = screen.getByLabelText('Icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent(SERVICE_CARD.customIcon.icon);
    expect(screen.getByText(SERVICE_CARD.customIcon.title)).toBeInTheDocument();
    expect(
      screen.getByText(SERVICE_CARD.customIcon.details),
    ).toBeInTheDocument();
  });
});
