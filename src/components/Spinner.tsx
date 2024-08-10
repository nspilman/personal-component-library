import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

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
  const { theme } = useTheme();

  const customStyles = {
    '--spinner-default-color': theme.colors.interactiveDefault,
    '--spinner-primary-color': theme.colors.primary,
    '--spinner-secondary-color': theme.colors.secondary,
    '--spinner-white-color': theme.colors.backgroundPrimary,
  } as React.CSSProperties;

  return (
    <div 
      className={spinnerVariants({ size, color, className })} 
      role="status" 
      style={{
        ...customStyles,
        color: color === 'default' ? 'var(--spinner-default-color)' :
               color === 'primary' ? 'var(--spinner-primary-color)' :
               color === 'secondary' ? 'var(--spinner-secondary-color)' :
               color === 'white' ? 'var(--spinner-white-color)' :
               undefined,
      }}
      {...props}
    >
      <span className="sr-only">{srText}</span>
    </div>
  );
};

Spinner.displayName = 'Spinner';