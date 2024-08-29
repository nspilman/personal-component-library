import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const dividerVariants = cva(
  'border-t border-borderHeavy',
  {
    variants: {
      thickness: {
        thin: 'border-t',
        medium: 'border-t-2',
        thick: 'border-t-4',
      },
    },
    defaultVariants: {
      thickness: 'thin',
    },
  }
);

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement>, VariantProps<typeof dividerVariants> {}

export const Divider: React.FC<DividerProps> = ({ className, color, thickness, ...props }) => {

  return (
    <hr 
      className={dividerVariants({ thickness, className })} 
   
      {...props} 
    />
  );
};

Divider.displayName = 'Divider';