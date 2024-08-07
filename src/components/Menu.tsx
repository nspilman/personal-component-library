import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

const menuVariants = cva(
  'relative inline-block text-left',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

const menuButtonVariants = cva(
  'inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

const menuItemsVariants = cva(
  'absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof menuVariants> {
  label: string;
  items: { label: string; onClick: () => void }[];
}

export const Menu: React.FC<MenuProps> = ({
  className,
  fullWidth,
  label,
  items,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={menuVariants({ fullWidth, className })} ref={menuRef} {...props}>
      <div>
        <button
          type="button"
          className={menuButtonVariants({ fullWidth })}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {label}
          <ChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className={menuItemsVariants({ fullWidth })} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Menu.displayName = 'Menu';