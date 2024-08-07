import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

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

  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={radioId}
        className={radioVariants({ size, className })}
        {...props}
      />
      {label && (
        <label htmlFor={radioId} className={labelVariants({ size })}>
          {label}
        </label>
      )}
    </div>
  );
};

Radio.displayName = 'Radio';