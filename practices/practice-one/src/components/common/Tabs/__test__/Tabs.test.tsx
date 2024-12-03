// Libraries
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from '@/components';

const mockItems = [
  { title: 'Tab 1', href: '/tab1', content: <div>Content for Tab 1</div> },
  { title: 'Tab 2', href: '/tab2', content: <div>Content for Tab 2</div> },
  { title: 'Tab 3', href: '/tab3', content: <div>Content for Tab 3</div> },
];

describe('Tabs Component', () => {
  let mockOnTabChange: jest.Mock;

  beforeEach(() => {
    mockOnTabChange = jest.fn();
    render(
      <Tabs
        items={mockItems}
        selectedTab="Tab 1"
        onTabChange={mockOnTabChange}
      />,
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Tabs
        items={mockItems}
        selectedTab="Tab 1"
        onTabChange={mockOnTabChange}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct number of tabs', () => {
    const tabs = screen.getAllByRole('link');
    expect(tabs).toHaveLength(mockItems.length);

    tabs.forEach((tab, index) => {
      expect(tab).toHaveTextContent(mockItems[index].title);
    });
  });

  it('displays the correct content for the active tab', () => {
    const activeContent = screen.getByText('Content for Tab 1');
    expect(activeContent).toBeVisible();
  });

  it('applies correct classes for active tabs', () => {
    const activeTab = screen.getByRole('link', { name: /Tab 1/i });
    expect(activeTab).toHaveClass(
      'text-primary-400 border-primary-400 border-b-2',
    );
  });

  it('applies correct classes for inactive tabs', () => {
    const inactiveTab = screen.getByRole('link', { name: /Tab 2/i });
    expect(inactiveTab).toHaveClass(
      'p-3 text-sm font-medium outline-none border-b-0',
    );
  });

  it('calls onTabChange when a tab is clicked', () => {
    const tab2 = screen.getByRole('link', { name: /Tab 2/i });
    fireEvent.click(tab2);

    expect(mockOnTabChange).toHaveBeenCalledTimes(1);
    expect(mockOnTabChange).toHaveBeenCalledWith('Tab 2');
  });

  it('updates content when a new tab is selected', () => {
    const tab2 = screen.getByRole('link', { name: /Tab 2/i });
    fireEvent.click(tab2);

    const newActiveContent = screen.getByText('Content for Tab 2');
    expect(newActiveContent).toBeVisible();
  });
});
