import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const radioVariants = cva(
  'h-4 w-4 border-gray-300 text-primary focus:ring-primary',
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const labelVariants = cva(
  'ml-2 text-gray-700',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof radioVariants> {
  label?: string;
}

export const Radio: React.FC<RadioProps> = ({
  className,
  size,
  label,
  id,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  const { theme } = useTheme();

  const customStyles = {
    '--radio-border-color': theme.colors.gray['300'],
    '--radio-text-color': theme.colors.primary.DEFAULT,
    '--radio-focus-ring-color': theme.colors.primary.DEFAULT,
    '--label-text-color': theme.colors.gray['700'],
  } as React.CSSProperties;

  return (
    <div className="flex items-center" style={customStyles}>
      <input
        type="radio"
        id={radioId}
        className={radioVariants({ size, className })}
        style={{
          borderColor: 'var(--radio-border-color)',
          color: 'var(--radio-text-color)',
        }}
        {...props}
      />
      {label && (
        <label 
          htmlFor={radioId} 
          className={labelVariants({ size })}
          style={{ color: 'var(--label-text-color)' }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Radio.displayName = 'Radio';