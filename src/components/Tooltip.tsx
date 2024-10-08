"use client"
import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const tooltipContainerVariants = cva('relative inline-block');

const tooltipVariants = cva(
  'absolute z-10 px-3 py-2 text-sm font-medium rounded-lg shadow-sm bg-backgroundSecondary text-textPrimary',
  {
    variants: {
      position: {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 translate-y-2',
        left: 'right-full top-1/2 transform -translate-y-1/2 -translate-x-2',
        right: 'left-full top-1/2 transform -translate-y-1/2 translate-x-2',
      },
    },
    defaultVariants: {
      position: 'top',
    },
  }
);

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tooltipVariants> {
  content: string;
  children: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position,
  children,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div className={tooltipContainerVariants()}>
      {React.cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={tooltipVariants({ position, className })}
          role="tooltip"
          {...props}
        >
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;