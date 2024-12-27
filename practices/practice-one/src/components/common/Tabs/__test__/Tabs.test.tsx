// Libraries
import { render, screen } from '@testing-library/react';
import { Tabs } from '@/components';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockItems = [
  { title: 'Tab 1', href: '/tab1', content: <div>Content for Tab 1</div> },
  { title: 'Tab 2', href: '/tab2', content: <div>Content for Tab 2</div> },
  { title: 'Tab 3', href: '/tab3', content: <div>Content for Tab 3</div> },
];

describe('Tabs Component', () => {
  const mockPush = jest.fn();
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/tab1',
      query: {},
      push: mockPush,
      replace: mockReplace,
    });
  });

  const renderTabs = (selectedTab: string) =>
    render(<Tabs items={mockItems} selectedTab={selectedTab} />);

  it('matches snapshot', () => {
    const { asFragment } = renderTabs('Tab 1');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct number of tabs', () => {
    renderTabs('Tab 1');
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(mockItems.length);

    tabs.forEach((tab, index) => {
      expect(tab).toHaveTextContent(mockItems[index].title);
    });
  });

  it('displays the correct content for the active tab', () => {
    renderTabs('Tab 1');
    const activeContent = screen.getByText('Content for Tab 1');
    expect(activeContent).toBeVisible();
  });

  it('applies correct classes for the active tab', () => {
    renderTabs('Tab 1');
    const activeTab = screen.getByRole('tab', { name: /Tab 1/i });
    expect(activeTab).toHaveClass(
      'text-primary-400 border-primary-400 border-b-2',
    );
  });

  it('applies correct classes for inactive tabs', () => {
    renderTabs('Tab 1');
    const inactiveTab = screen.getByRole('tab', { name: /Tab 2/i });
    expect(inactiveTab).toHaveClass(
      'p-3 text-sm font-medium outline-none border-b-0',
    );
  });
});
