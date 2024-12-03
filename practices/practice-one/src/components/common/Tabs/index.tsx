'use client';

// Libraries
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import Link from 'next/link';

interface ITabItem {
  title: string;
  content: React.ReactNode;
  href: string;
}

interface ITabsProps {
  items: ITabItem[];
  customClass?: {
    wrapper?: string;
    header?: string;
    button?: string;
    link?: string;
    activeLink?: string;
    content?: string;
    activeContent?: string;
    inactiveContent?: string;
  };
  selectedTab: string;
  onTabChange: (selectedTab: string) => void;
}

/**
 * Tabs component
 *
 * @param customClass - Optional custom class names to customize the component's appearance.
 * @param customClass.wrapper - Custom class for the wrapper container.
 * @param customClass.header - Custom class for the tab header container.
 * @param customClass.link - Custom class for the tab links.
 * @param customClass.activeLink - Custom class for the active tab link.
 * @param customClass.content - Custom class for the tab content container.
 * @param customClass.activeContent - Custom class for the active tab content.
 * @param customClass.inactiveContent - Custom class for the inactive tab content.
 *
 * @returns {JSX.Element} - The Tabs element.
 */
const Tabs = ({
  items,
  selectedTab,
  onTabChange,
  customClass = {
    wrapper: 'flex flex-col gap-y-6 w-full',
    header: 'flex justify-center gap-7 border-b-2 pb-2',
    link: 'p-3 text-sm font-medium outline-none',
    activeLink: 'text-primary-400 border-primary-400 border-b-2',
    content: 'mt-4',
    activeContent:
      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
    inactiveContent: 'hidden',
  },
}: ITabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>(selectedTab);

  useEffect(() => {
    setActiveTab(selectedTab);
  }, [selectedTab]);

  const handleClick = (title: string) => {
    onTabChange(title);
  };

  return (
    <div className={customClass.wrapper}>
      <ul className={customClass.header}>
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              onClick={() => handleClick(item.title)}
              className={twMerge(
                customClass.link ?? customClass.button,
                activeTab === item.title
                  ? customClass.activeLink
                  : 'border-b-0',
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={customClass.content}>
        {items.map((item) => (
          <div
            key={item.title}
            className={twMerge(
              activeTab === item.title
                ? customClass.activeContent
                : customClass.inactiveContent,
            )}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
