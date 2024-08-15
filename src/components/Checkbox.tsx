import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

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

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={checkboxId}
        className={checkboxVariants({ size, className })}
        {...props}
      />
      {label && (
        <label 
          htmlFor={checkboxId} 
          className={labelVariants({ size })}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.displayName = 'Checkbox';