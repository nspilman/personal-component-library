import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-backgroundSecondary text-textSecondary',
        primary: 'bg-backgroundSecondary text-textPrimary',
        secondary: 'bg-backgroundSecondary text-textSecondary',
        success: 'bg-success text-textSuccess',
        warning: 'bg-warning text-textWarning',
        danger: 'bg-error text-textInverse',
      },
      outline: {
        true: 'bg-transparent border',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        outline: true,
        class: 'border-borderMedium text-textSecondary',
      },
      {
        variant: 'primary',
        outline: true,
        class: 'border-borderMedium text-textPrimary',
      },
      {
        variant: 'secondary',
        outline: true,
        class: 'border-borderMedium text-textSecondary',
      },
      {
        variant: 'success',
        outline: true,
        class: 'border-success text-textPrimary',
      },
      {
        variant: 'warning',
        outline: true,
        class: 'border-warning text-textWarning',
      },
      {
        variant: 'danger',
        outline: true,
        class: 'border-error',
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