import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

const selectContainerVariants = cva('relative');

const labelVariants = cva('block text-sm font-medium text-textPrimary mb-1');

const selectVariants = cva(
  'block w-full rounded-md border-borderLight shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 bg-backgroundSecondary text-textSecondary',
  {
    variants: {
      size: {
        sm: 'py-1 text-sm',
        md: 'py-2 text-base',
        lg: 'py-3 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const iconContainerVariants = cva(
  'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-textTertiary'
);

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  options: SelectOption[];
  label?: string;
}

export const Select: React.FC<SelectProps> = ({
  className,
  size,
  options,
  label,
  id,
  ...props
}) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={selectContainerVariants()}>
      {label && (
        <label htmlFor={selectId} className={labelVariants()}>
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={selectVariants({ size, className })}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={iconContainerVariants()}>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

Select.displayName = 'Select';