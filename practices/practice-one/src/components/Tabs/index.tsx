'use client';

// Libraries
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

interface ITabItem {
  title: string;
  content: React.ReactNode;
}

interface ITabsProps {
  items: ITabItem[];
}

const Tabs = ({ items }: ITabsProps) => {
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
    <div className="flex justify-center items-center">
      <div className="max-w-6xl flex flex-col gap-y-6 w-full">
        {/* Tabs Header */}
        <ul className="flex justify-center gap-7 overflow-auto w-auto">
          {items.map((item) => (
            <li key={item.title}>
              <button
                id={`tab-${item.title}`}
                ref={item.title === items[0]?.title ? firstBtnRef : null}
                onClick={() => handleClick(item.title)}
                className={classNames(
                  'p-3 text-sm font-medium transition-colors duration-200 text-center outline-none border-b-2',
                  selectedTab === item.title
                    ? 'text-primary-400 border-primary-400'
                    : 'text-gray-600 border-transparent hover:text-primary-400 hover:border-primary-400',
                )}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Tabs Content */}
        <div className="bg-white">
          {items.map((item) => (
            <div
              key={item.title}
              id={`tab-panel-${item.title}`}
              role="tabpanel"
              className={classNames(
                selectedTab === item.title
                  ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                  : 'hidden',
              )}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
