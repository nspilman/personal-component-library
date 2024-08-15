import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const switchContainerVariants = cva('flex items-center');

const switchVariants = cva(
  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
  {
    variants: {
      checked: {
        true: 'bg-backgroundSecondary',
        false: 'bg-backgroundPrimary',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
);

const toggleVariants = cva(
  'pointer-events-none inline-block h-5 w-5 rounded-full bg-backgroundTertiary shadow transform ring-0 transition ease-in-out duration-200',
  {
    variants: {
      checked: {
        true: 'translate-x-5',
        false: 'translate-x-0',
      },
    },
    defaultVariants: {
      checked: false,
    },
  }
);

const labelVariants = cva('ml-3 text-sm text-textPrimary');

export interface SwitchProps extends VariantProps<typeof switchVariants> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  className,
  ...props
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!disabled) {
        onChange(!checked);
      }
    }
  };

  return (
    <label className={switchContainerVariants()}>
      <button
        type="button"
        className={switchVariants({ checked, disabled, className })}
        onClick={() => !disabled && onChange(!checked)}
        onKeyDown={handleKeyDown}
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        {...props}
      >
        <span className="sr-only">{label || 'Toggle'}</span>
        <span className={toggleVariants({ checked })} />
      </button>
      {label && <span className={labelVariants()}>{label}</span>}
    </label>
  );
};

Switch.displayName = 'Switch';