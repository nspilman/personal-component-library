import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const toggleVariants = cva(
  'relative inline-flex flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
  {
    variants: {
      size: {
        sm: 'h-6 w-11',
        md: 'h-7 w-14',
        lg: 'h-8 w-16',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const toggleSwitchVariants = cva(
  'pointer-events-none inline-block transform rounded-full shadow ring-0 transition duration-200 ease-in-out border-borderHeavy border-1 bg-backgroundInverse',
  {
    variants: {
      size: {
        sm: 'h-5 w-5',
        md: 'h-6 w-6',
        lg: 'h-7 w-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof toggleVariants> {
  label?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  className,
  size,
  label,
  checked,
  onChange,
  ...props
}) => {
  const id = props.id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label htmlFor={id} className="flex items-center">
      <div className={toggleVariants({ size, className })}>
        <input
          type="checkbox"
          id={id}
          className="sr-only"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <span
          className={`${toggleSwitchVariants({ size })}`}
          style={{
            transform: checked
              ? size === 'sm'
                ? 'translateX(20px)'
                : size === 'md'
                ? 'translateX(28px)'
                : 'translateX(32px)'
              : 'translateX(0)',
          }}
        />
      </div>
      {label && (
        <span className="ml-3 text-sm font-medium text-textPrimary">{label}</span>
      )}
    </label>
  );
};

Toggle.displayName = 'Toggle';