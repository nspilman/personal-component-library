import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

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
  'inline-flex justify-center items-center rounded-md border shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
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
  'absolute z-10 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-56',
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

const menuItemVariants = cva(
  'block w-full text-left px-4 py-2 text-sm',
  {
    variants: {
      active: {
        true: 'bg-backgroundPrimary',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
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
  const { theme } = useTheme();

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
          <span className="text-textPrimary">{label}</span>
          <ChevronDown className="ml-2 -mr-1 h-5 w-5 text-textSecondary" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div 
          className={menuItemsVariants({ fullWidth })} 
          role="menu" 
          aria-orientation="vertical" 
          aria-labelledby="options-menu"
        >
          <div className="py-1 bg-backgroundSecondary" role="none">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className={menuItemVariants({ active: false })}
                role="menuitem"
              >
                <span className="text-textPrimary">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Menu.displayName = 'Menu';