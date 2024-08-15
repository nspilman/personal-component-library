import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const dividerVariants = cva(
  'border-t border-borderHeavy',
  {
    variants: {
      color: {
        light: 'border-gray-200',
        dark: 'border-gray-700',
      },
      thickness: {
        thin: 'border-t',
        medium: 'border-t-2',
        thick: 'border-t-4',
      },
    },
    defaultVariants: {
      color: 'light',
      thickness: 'thin',
    },
  }
);

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement>, VariantProps<typeof dividerVariants> {}

export const Divider: React.FC<DividerProps> = ({ className, color, thickness, ...props }) => {

  return (
    <hr 
      className={dividerVariants({ color, thickness, className })} 
   
      {...props} 
    />
  );
};

Divider.displayName = 'Divider';