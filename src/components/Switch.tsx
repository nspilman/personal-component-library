import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const switchVariants = cva(
  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
  {
    variants: {
      checked: {
        true: 'bg-primary',
        false: 'bg-gray-200',
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
  'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
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

export interface SwitchProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof switchVariants> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  className,
  ...props
}) => {
  const { theme } = useTheme();

  const customStyles = {
    '--switch-bg-color': checked ? theme.colors.primary.DEFAULT : theme.colors.gray['200'],
    '--switch-toggle-color': theme.colors.white,
    '--switch-focus-ring-color': theme.colors.primary.DEFAULT,
    '--switch-disabled-opacity': '0.5',
    '--label-color': theme.colors.gray['700'],
  } as React.CSSProperties;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!disabled) {
        onChange(!checked);
      }
    }
  };

  return (
    <label className="flex items-center" style={customStyles}>
      <button
        type="button"
        className={switchVariants({ checked, disabled, className })}
        onClick={() => !disabled && onChange(!checked)}
        onKeyDown={handleKeyDown}
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        style={{
          backgroundColor: 'var(--switch-bg-color)',
          opacity: disabled ? 'var(--switch-disabled-opacity)' : '1',
        }}
        {...props}
      >
        <span className="sr-only">{label || 'Toggle'}</span>
        <span 
          className={toggleVariants({ checked })}
          style={{ backgroundColor: 'var(--switch-toggle-color)' }}
        />
      </button>
      {label && <span className="ml-3 text-sm" style={{ color: 'var(--label-color)' }}>{label}</span>}
    </label>
  );
};

Switch.displayName = 'Switch';