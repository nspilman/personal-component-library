import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const checkboxVariants = cva(
  'h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary',
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

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  size,
  label,
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const { theme } = useTheme();

  const customStyles = {
    '--checkbox-border-color': theme.colors.borderLight,
    '--checkbox-text-color': theme.colors.textPrimary,
    '--checkbox-focus-ring-color': theme.colors.backgroundSecondary,
    '--label-text-color': theme.colors.textSecondary
  } as React.CSSProperties;

  return (
    <div className="flex items-center" style={customStyles}>
      <input
        type="checkbox"
        id={checkboxId}
        className={checkboxVariants({ size, className })}
        style={{
          borderColor: 'var(--checkbox-border-color)',
          color: 'var(--checkbox-text-color)',
        }}
        {...props}
      />
      {label && (
        <label 
          htmlFor={checkboxId} 
          className={labelVariants({ size })}
          style={{ color: 'var(--label-text-color)' }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.displayName = 'Checkbox';