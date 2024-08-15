import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-lg overflow-hidden',
  {
    variants: {
      variant: {
        elevated: 'shadow-md',
        outlined: 'border border-borderMedium',
      },
      width: {
        fluid: 'w-full',
        fixed: 'w-80',
      },
    },
    defaultVariants: {
      variant: 'elevated',
      width: 'fluid',
    },
  }
);

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  image?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, width, header, footer, image, children, ...props }, ref) => {

    return (
      <div 
        className={`${cardVariants({ variant, width, className })} text-textPrimary bg-backgroundSecondary`}
        ref={ref} 
        {...props}
      >
        {image && (
          <div className="w-full h-48 bg-backgroundTertiary">
            <img src={image} alt="Card" className="w-full h-full object-cover" />
          </div>
        )}
        {header && (
          <div className="px-spaceMd py-spaceSm border-b border-borderLight">
            {header}
          </div>
        )}
        <div className="p-spaceMd">
          {children}
        </div>
        {footer && (
          <div className="px-spaceMd py-spaceSm border-t border-borderLight">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';