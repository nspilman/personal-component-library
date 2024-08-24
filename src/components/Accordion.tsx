"use client"
import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

const accordionVariants = cva('border rounded-md overflow-hidden bg-backgroundPrimary');

const itemVariants = cva('border-b last:border-b-0');

const headerVariants = cva(
  'flex justify-between items-center p-4 cursor-pointer transition-colors',
  {
    variants: {
      isOpen: {
        true: 'bg-backgroundTertiary',
        false: 'bg-backgroundSecondary hover:bg-backgroundPrimary',
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
      className={accordionVariants({ className: `${className} border-borderMedium` })} 
      {...props}
    >
      {items.map((item, index) => (
        <div key={index} className={itemVariants()} >
          <div
            className={headerVariants({ isOpen: openItems[index] })}
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-sm font-medium">{item.title}</h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${openItems[index] ? 'transform rotate-180' : ''}`}
            />
          </div>
          <div className={contentVariants({ isOpen: openItems[index] })}>
            <div className="p-4" >{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.displayName = 'Accordion';