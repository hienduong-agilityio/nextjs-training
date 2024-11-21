'use client';

// Libraries
import { useState, useEffect, useRef } from 'react';

interface ITabItem {
  title: string;
  content: React.ReactNode;
}

interface ITabsProps {
  items: ITabItem[];
  customClass?: {
    wrapper?: string;
    header?: string;
    button?: string;
    content?: string;
    activeButton?: string;
    activeContent?: string;
    inactiveContent?: string;
  };
}

/**
 * Tabs component
 *
 * @param customClass - Optional custom class names to customize the component's appearance.
 * @param customClass.wrapper - Custom class for the wrapper container.
 * @param customClass.header - Custom class for the tab header container.
 * @param customClass.button - Custom class for the tab buttons.
 * @param customClass.activeButton - Custom class for the active tab button.
 * @param customClass.content - Custom class for the tab content container.
 * @param customClass.activeContent - Custom class for the active tab content.
 * @param customClass.inactiveContent - Custom class for the inactive tab content.
 *
 * @returns {JSX.Element} - The Tabs element.
 */
const Tabs = ({
  items,
  customClass = {
    wrapper: 'flex flex-col gap-y-6 w-full',
    header: 'flex justify-center gap-7 border-b-2 pb-2',
    button: 'p-3 text-sm font-medium outline-none transition-colors',
    activeButton: 'text-primary-400 border-primary-400',
    content: 'mt-4',
    activeContent:
      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
    inactiveContent: 'hidden',
  },
}: ITabsProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<string>(items[0]?.title || '');
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  const handleClick = (title: string) => {
    setSelectedTab(title);
  };

  return (
    <div className={customClass.wrapper}>
      <ul className={customClass.header}>
        {items.map((item) => (
          <li key={item.title}>
            <button
              id={`tab-${item.title}`}
              ref={item.title === items[0]?.title ? firstBtnRef : null}
              onClick={() => handleClick(item.title)}
              className={`${customClass.button} ${
                selectedTab === item.title
                  ? customClass.activeButton
                  : ' border-transparent hover:text-primary-400 hover:border-primary-400'
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <div className={customClass.content}>
        {items.map((item) => (
          <div
            key={item.title}
            id={`tab-panel-${item.title}`}
            role="tabpanel"
            className={`${
              selectedTab === item.title
                ? customClass.activeContent
                : customClass.inactiveContent ?? 'hidden'
            }`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
