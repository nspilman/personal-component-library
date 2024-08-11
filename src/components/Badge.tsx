import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-textSecondary',
        primary: 'bg-primary-100 text-primary-800',
        secondary: 'bg-secondary-100 text-secondary-800',
        success: 'bg-success text-green-800',
        warning: 'bg-warning text-yellow-800',
        danger: 'bg-red-100 text-textInverse',
      },
      outline: {
        true: 'bg-transparent border',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        outline: true,
        class: 'border-gray-300 text-gray-800',
      },
      {
        variant: 'primary',
        outline: true,
        class: 'border-primary-300 text-primary-800',
      },
      {
        variant: 'secondary',
        outline: true,
        class: 'border-secondary-300 text-secondary-800',
      },
      {
        variant: 'success',
        outline: true,
        class: 'border-green-300 text-green-800',
      },
      {
        variant: 'warning',
        outline: true,
        class: 'border-yellow-300 text-yellow-800',
      },
      {
        variant: 'danger',
        outline: true,
        class: 'border-red-300',
      },
    ],
    defaultVariants: {
      variant: 'default',
      outline: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  outline,
  children,
  ...props
}) => {



  return (
    <span 
      className={badgeVariants({ variant, outline, className })} 
  
      {...props}
    >
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';