import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const sliderVariants = cva('relative w-full h-2 bg-gray-200 rounded-full');

const thumbVariants = cva(
  'absolute top-1/2 w-4 h-4 bg-primary rounded-full shadow transform -translate-y-1/2 -translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
  {
    variants: {
      disabled: {
        true: 'bg-gray-400 cursor-not-allowed',
        false: 'cursor-pointer',
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
  const { theme } = useTheme();

  const customStyles = {
    '--slider-bg-color': theme.colors.gray['200'],
    '--slider-fill-color': theme.colors.primary.DEFAULT,
    '--slider-thumb-color': theme.colors.primary.DEFAULT,
    '--slider-thumb-border-color': theme.colors.white,
    '--slider-disabled-color': theme.colors.gray['400'],
  } as React.CSSProperties;

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
      className={sliderVariants({ className })}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{ ...customStyles, backgroundColor: 'var(--slider-bg-color)' }}
      {...props}
    >
      <div
        className="absolute h-full rounded-full"
        style={{ 
          width: `${percentage}%`, 
          backgroundColor: disabled ? 'var(--slider-disabled-color)' : 'var(--slider-fill-color)' 
        }}
      />
      <div
        className={thumbVariants({ disabled })}
        style={{ 
          left: `${percentage}%`,
          backgroundColor: disabled ? 'var(--slider-disabled-color)' : 'var(--slider-thumb-color)',
          borderColor: 'var(--slider-thumb-border-color)',
        }}
      />
    </div>
  );
};

Slider.displayName = 'Slider';