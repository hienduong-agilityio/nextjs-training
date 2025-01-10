// Libraries
import { render, screen } from '@testing-library/react';

// Components
import { Service } from '@/components';

// Mocks
import { serviceData } from '@/mocks';

describe('Service Component', () => {
  let container: HTMLElement | null = null;

  beforeEach(() => {
    const rendered = render(<Service />);

    container = rendered.container;
  });

  const getServiceHeadings = () => screen.getAllByRole('heading', { level: 4 });
  const getDetailTexts = () =>
    screen.getAllByText(
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    );

  it('matches the snapshot', () => {
    const { container } = render(<Service />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct number of ServiceCard components with titles', () => {
    const serviceHeadings = getServiceHeadings();
    expect(serviceHeadings).toHaveLength(serviceData.length);

    const detailTexts = getDetailTexts();
    expect(detailTexts).toHaveLength(serviceData.length);

    serviceData.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('applies correct structure and class names', () => {
    expect(container?.firstChild).toHaveClass(
      'pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]',
    );

    const flexWrapper = container?.querySelector('div');
    expect(flexWrapper).toHaveClass('flex flex-wrap');
  });
});
