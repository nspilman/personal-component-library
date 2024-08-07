import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerVariants = cva(
  'inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 border-2',
        md: 'h-6 w-6 border-2',
        lg: 'h-8 w-8 border-3',
        xl: 'h-12 w-12 border-4',
      },
      color: {
        default: 'text-gray-600',
        primary: 'text-primary',
        secondary: 'text-secondary',
        white: 'text-white',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'default',
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  srText?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  size,
  color,
  srText = 'Loading...',
  ...props
}) => {
  return (
    <div className={spinnerVariants({ size, color, className })} role="status" {...props}>
      <span className="sr-only">{srText}</span>
    </div>
  );
};

Spinner.displayName = 'Spinner';