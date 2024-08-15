import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'w-full rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-borderLight focus-visible:ring-primary text-textPrimary placeholder:text-textTertiary',
        success: 'border-success focus-visible:ring-success text-textPrimary placeholder:text-textTertiary',
        error: 'border-error focus-visible:ring-error text-textPrimary placeholder:text-textTertiary',
      },
      theme: {
        light: '',
        dark: '',
      },
    },
    compoundVariants: [
      {
        theme: 'dark',
        variant: 'default',
        className: 'border-borderLight focus-visible:ring-primary text-textPrimary placeholder:text-textTertiary',
      },
    ],
    defaultVariants: {
      variant: 'default',
      theme: 'light',
    },
  }
);

const labelVariants = cva('block text-sm font-medium mb-1 text-textSecondary', {
  variants: {

  },
  defaultVariants: {
    theme: 'light',
  },
});

const helperTextVariants = cva('mt-1 text-sm', {
  variants: {
    variant: {
      default: 'text-textTertiary',
      success: 'text-success',
      error: 'text-error',
    },
    theme: {
      light: '',
      dark: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'light',
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, theme, label, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');


    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className={labelVariants()}>
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={inputVariants({ variant, className })}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className={helperTextVariants({ variant })}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';