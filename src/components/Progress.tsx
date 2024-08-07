import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const progressVariants = cva('w-full bg-gray-200 rounded-full', {
  variants: {
    size: {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const barVariants = cva('h-full rounded-full transition-all duration-300 ease-in-out', {
  variants: {
    variant: {
      default: 'bg-primary',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      error: 'bg-red-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressVariants>, VariantProps<typeof barVariants> {
  value: number;
  max?: number;
  showLabel?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size,
  variant,
  showLabel = false,
  className,
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const { theme } = useTheme();

  const customStyles = {
    '--progress-bg-color': theme.colors.gray['200'],
    '--progress-bar-color': theme.colors[variant || 'primary'].DEFAULT,
    '--progress-text-color': theme.colors.gray['600'],
  } as React.CSSProperties;

  return (
    <div className="w-full" style={customStyles}>
      <div 
        className={progressVariants({ size, className })} 
        style={{ backgroundColor: 'var(--progress-bg-color)' }}
        {...props}
      >
        <div 
          className={barVariants({ variant })}
          style={{ width: `${percentage}%`, backgroundColor: 'var(--progress-bar-color)' }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-sm" style={{ color: 'var(--progress-text-color)' }}>
          {percentage.toFixed(0)}%
        </div>
      )}
    </div>
  );
};

Progress.displayName = 'Progress';