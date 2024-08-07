import React, { useEffect, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

const drawerVariants = cva(
  'fixed inset-y-0 bg-white shadow-xl transition-transform duration-300 ease-in-out',
  {
    variants: {
      position: {
        left: 'left-0',
        right: 'right-0',
      },
      size: {
        sm: 'w-64',
        md: 'w-80',
        lg: 'w-96',
        full: 'w-full',
      },
    },
    defaultVariants: {
      position: 'left',
      size: 'md',
    },
  }
);

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof drawerVariants> {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({
  className,
  position,
  size,
  isOpen,
  onClose,
  children,
  ...props
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      <div
        ref={drawerRef}
        className={drawerVariants({ position, size, className })}
        style={{
          transform: isOpen ? 'translateX(0)' : `translateX(${position === 'left' ? '-100%' : '100%'})`,
        }}
        {...props}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
          aria-label="Close drawer"
        >
          <X size={24} />
        </button>
        <div className="p-6 h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

Drawer.displayName = 'Drawer';