"use client"
import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const sliderVariants = cva('relative w-full h-2 rounded-full', {
  variants: {
    disabled: {
      true: 'bg-backgroundSecondary',
      false: 'bg-backgroundSecondary',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const fillVariants = cva('absolute h-full rounded-full', {
  variants: {
    disabled: {
      true: 'bg-info',
      false: 'bg-primary',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const thumbVariants = cva(
  'absolute top-1/2 w-4 h-4 rounded-full shadow transform -translate-y-1/2 -translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
  {
    variants: {
      disabled: {
        true: 'bg-info cursor-not-allowed',
        false: 'bg-primary cursor-pointer',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sliderVariants> {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  disabled = false,
  className,
  ...props
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (sliderRef.current && !disabled) {
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = (clientX - rect.left) / rect.width;
      const newValue = Math.round((percentage * (max - min) + min) / step) * step;
      onChange(Math.max(min, Math.min(max, newValue)));
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!disabled) {
      setIsDragging(true);
      handleMove(e.clientX);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!disabled) {
      setIsDragging(true);
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      className={sliderVariants({ disabled, className })}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      {...props}
    >
      <div
        className={fillVariants({ disabled })}
        style={{ width: `${percentage}%` }}
      />
      <div
        className={thumbVariants({ disabled })}
        style={{ left: `${percentage}%` }}
      />
    </div>
  );
};

Slider.displayName = 'Slider';