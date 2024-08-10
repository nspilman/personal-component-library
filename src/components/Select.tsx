import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const selectVariants = cva(
  'block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50',
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
  const { theme } = useTheme();

  const customStyles = {
    '--select-border-color': theme.colors.borderLight,
    '--select-focus-border-color': theme.colors.primary,
    '--select-focus-ring-color': theme.colors.primary,
    '--select-text-color': theme.colors.textSecondary,
    '--select-bg-color': theme.colors.backgroundSecondary,
  } as React.CSSProperties;

  return (
    <div className="relative" style={customStyles}>
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium color-textPrimary mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={selectVariants({ size, className })}
          style={{
            borderColor: 'var(--select-border-color)',
            color: 'var(--select-text-color)',
            backgroundColor: 'var(--select-bg-color)',
          }}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

Select.displayName = 'Select';