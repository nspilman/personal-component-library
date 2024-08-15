import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

const chipVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-backgroundSecondary',
  {
    variants: {
      variant: {
        default: '',
        primary: 'text-textPrimary',
        secondary: 'bg-backgroundSecondary text-textSecondary',
        success: 'bg-success text-green-800',
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
  return (
    <div
      className={chipVariants({ variant, clickable, className })}
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
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
};

Chip.displayName = 'Chip';