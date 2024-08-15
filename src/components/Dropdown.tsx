import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

const dropdownVariants = cva(
  'relative inline-block text-left bg-backgroundSecondary',
  {
    variants: {
      width: {
        auto: '',
        full: 'w-full',
      },
    },
    defaultVariants: {
      width: 'auto',
    },
  }
);

const buttonVariants = cva(
  'inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary bg-backgroundPrimary',
  {
    variants: {
      isOpen: {
        true: 'bg-gray-100',
        false: '',
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
);

const menuVariants = cva(
  'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none bg-backgroundSecondary',
  {
    variants: {
      isOpen: {
        true: 'block',
        false: 'hidden',
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
);

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownVariants> {
  label: string;
  items: { label: string; onClick: () => void }[];
}

export const Dropdown: React.FC<DropdownProps> = ({ 
  label, 
  items, 
  width,
  className,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={dropdownVariants({ width, className })} ref={dropdownRef} {...props}>
      <div>
        <button 
          type="button" 
          className={buttonVariants({ isOpen })}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {label}
          <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div 
        className={menuVariants({ isOpen })} 
        role="menu" 
        aria-orientation="vertical" 
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className="block w-full text-left bg-backgroundPrimary px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

Dropdown.displayName = 'Dropdown';