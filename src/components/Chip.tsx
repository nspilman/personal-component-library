import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const chipVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-800',
        primary: 'bg-primary-100 text-primary-800',
        secondary: 'bg-secondary-100 text-secondary-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        danger: 'bg-red-100 text-red-800',
      },
      clickable: {
        true: 'cursor-pointer hover:bg-opacity-80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  onDelete?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  className,
  variant,
  clickable,
  children,
  onDelete,
  ...props
}) => {
  const { theme } = useTheme();

  const getCustomStyles = () => {
    const baseColor = variant === 'primary' ? 'primary' :
                      variant === 'secondary' ? 'secondary' :
                      variant === 'success' ? 'green' :
                      variant === 'warning' ? 'yellow' :
                      variant === 'danger' ? 'red' : 'gray';

    return {
      '--chip-bg-color': theme.colors[baseColor]['100'],
      '--chip-text-color': theme.colors[baseColor]['800'],
      '--chip-hover-bg-color': theme.colors[baseColor]['200'],
      '--chip-delete-hover-bg-color': theme.colors[baseColor]['200'],
    } as React.CSSProperties;
  };

  const customStyles = getCustomStyles();

  return (
    <div
      className={chipVariants({ variant, clickable, className })}
      style={{
        ...customStyles,
        backgroundColor: 'var(--chip-bg-color)',
        color: 'var(--chip-text-color)',
      }}
      {...props}
    >
      {children}
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-1 p-0.5 rounded-full hover:bg-gray-200"
          style={{
            ':hover': {
              backgroundColor: 'var(--chip-delete-hover-bg-color)',
            },
          }}
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
};

Chip.displayName = 'Chip';