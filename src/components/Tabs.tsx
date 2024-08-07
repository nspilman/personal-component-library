import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const tabsContainerVariants = cva('border-b border-gray-200');

const tabListVariants = cva('-mb-px flex');

const tabVariants = cva(
  'inline-block py-2 px-4 text-sm font-medium',
  {
    variants: {
      isActive: {
        true: 'border-b-2 border-primary text-primary',
        false: 'text-gray-500 hover:text-gray-700 hover:border-gray-300',
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tabsContainerVariants> {
  tabs: Tab[];
  defaultActiveTab?: number;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab = 0,
  className,
  ...props
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveTab);

  return (
    <div className={tabsContainerVariants({ className })} {...props}>
      <div className={tabListVariants()} role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={tabVariants({ isActive: index === activeTabIndex })}
            role="tab"
            aria-selected={index === activeTabIndex}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';
