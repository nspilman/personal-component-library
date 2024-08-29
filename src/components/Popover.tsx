"use client"
import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const popoverVariants = cva(
  'absolute z-10 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5',
  {
    variants: {
      position: {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
        left: 'right-full mr-2',
        right: 'left-full ml-2',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
);

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>, VariantProps<typeof popoverVariants> {
  trigger: React.ReactElement;
  content: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}
export const Popover: React.FC<PopoverProps> = ({
  className,
  position,
  trigger,
  content,
  isOpen: controlledIsOpen,
  onOpenChange,
  ...props
}) => {
  const [isOpenState, setIsOpenState] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : isOpenState;
  const setIsOpen = (newIsOpen: boolean) => {
    if (controlledIsOpen === undefined) {
      setIsOpenState(newIsOpen);
    }
    onOpenChange?.(newIsOpen);
  };

  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className={popoverVariants({ position, className })}
          {...props}
        >
          {content}
        </div>
      )}
    </div>
  );
};

Popover.displayName = 'Popover';