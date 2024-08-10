import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const inputVariants = cva(
  'w-full rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus-visible:ring-primary',
        success: 'border-green-500 focus-visible:ring-green-500',
        error: 'border-red-500 focus-visible:ring-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, label, helperText, id, ...props }, ref) => {
    const { theme } = useTheme();
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const customStyles = {
        '--input-border-color': theme.colors.borderLight,
        '--input-focus-ring-color': theme.colors.primary,
        '--input-text-color': theme.colors.textPrimary,
        '--input-placeholder-color': theme.colors.textTertiary,
        '--label-text-color': theme.colors.textSecondary,
        '--helper-text-color': theme.colors.textTertiary,
      } as React.CSSProperties;

    return (
      <div className="w-full" style={customStyles}>
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium mb-1" style={{ color: 'var(--label-text-color)' }}>
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={inputVariants({ variant, className })}
          ref={ref}
          style={{
            borderColor: 'var(--input-border-color)',
            color: 'var(--input-text-color)',
            '::placeholder': { color: 'var(--input-placeholder-color)' },
          }}
          {...props}
        />
        {helperText && (
          <p className={`mt-1 text-sm ${variant === 'error' ? 'text-red-500' : ''}`} style={{ color: 'var(--helper-text-color)' }}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';