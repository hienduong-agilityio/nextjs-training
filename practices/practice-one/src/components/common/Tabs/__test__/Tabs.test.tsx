// Libraries
import { render, screen, RenderResult } from '@testing-library/react';

// Components
import { Tabs } from '@/components';

const mockItems = [
  { title: 'Tab 1', content: <div>Content for Tab 1</div> },
  { title: 'Tab 2', content: <div>Content for Tab 2</div> },
  { title: 'Tab 3', content: <div>Content for Tab 3</div> },
];

let renderResult: RenderResult;

describe('Tabs Component', () => {
  beforeEach(() => {
    renderResult = render(<Tabs items={mockItems} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the Tabs component with the correct number of tabs', () => {
    const tabs = screen.getAllByRole('button');
    expect(tabs).toHaveLength(mockItems.length);

    tabs.forEach((tab, index) => {
      expect(tab).toHaveTextContent(mockItems[index].title);
    });
  });

  it('sets focus on the first tab button on initial render', () => {
    const firstTab = screen.getByRole('button', { name: /Tab 1/i });
    expect(firstTab).toHaveFocus();
  });

  it('applies correct classes for active tabs', () => {
    const tab1 = screen.getByRole('button', { name: /Tab 1/i });

    expect(tab1).toHaveClass('text-primary-400 border-primary-400');
  });
});
