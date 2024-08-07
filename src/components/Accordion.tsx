import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const accordionVariants = cva('border rounded-md overflow-hidden');

const itemVariants = cva('border-b last:border-b-0');

const headerVariants = cva(
  'flex justify-between items-center p-4 cursor-pointer transition-colors',
  {
    variants: {
      isOpen: {
        true: 'bg-gray-100',
        false: 'bg-gray-50 hover:bg-gray-100',
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
);

const contentVariants = cva(
  'overflow-hidden transition-all duration-300 ease-in-out',
  {
    variants: {
      isOpen: {
        true: 'max-h-96',
        false: 'max-h-0',
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
);

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof accordionVariants> {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
  ...props
}) => {
  const [openItems, setOpenItems] = useState<boolean[]>(new Array(items.length).fill(false));
  const { theme } = useTheme();

  const customStyles = {
    '--accordion-border-color': theme.colors.gray['200'],
    '--accordion-bg-color': theme.colors.white,
    '--accordion-text-color': theme.colors.gray['700'],
    '--accordion-hover-bg-color': theme.colors.gray['100'],
  } as React.CSSProperties;

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) => {
      if (allowMultiple) {
        const newOpenItems = [...prevOpenItems];
        newOpenItems[index] = !newOpenItems[index];
        return newOpenItems;
      } else {
        return prevOpenItems.map((_, i) => i === index ? !prevOpenItems[i] : false);
      }
    });
  };

  return (
    <div 
      className={accordionVariants({ className })} 
      style={{
        ...customStyles,
        borderColor: 'var(--accordion-border-color)',
        backgroundColor: 'var(--accordion-bg-color)',
      }} 
      {...props}
    >
      {items.map((item, index) => (
        <div key={index} className={itemVariants()} style={{ borderColor: 'var(--accordion-border-color)' }}>
          <div
            className={headerVariants({ isOpen: openItems[index] })}
            onClick={() => toggleItem(index)}
            style={{ 
              color: 'var(--accordion-text-color)',
              backgroundColor: openItems[index] ? 'var(--accordion-hover-bg-color)' : 'var(--accordion-bg-color)',
            }}
          >
            <h3 className="text-sm font-medium">{item.title}</h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${openItems[index] ? 'transform rotate-180' : ''}`}
            />
          </div>
          <div className={contentVariants({ isOpen: openItems[index] })}>
            <div className="p-4" style={{ color: 'var(--accordion-text-color)' }}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.displayName = 'Accordion';