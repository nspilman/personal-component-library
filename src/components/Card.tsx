import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'bg-white rounded-lg overflow-hidden',
  {
    variants: {
      variant: {
        elevated: 'shadow-md',
        outlined: 'border border-gray-200',
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
      <div className={cardVariants({ variant, width, className })} ref={ref} {...props}>
        {image && (
          <div className="w-full h-48 bg-gray-200">
            <img src={image} alt="Card" className="w-full h-full object-cover" />
          </div>
        )}
        {header && (
          <div className="px-4 py-3 border-b border-gray-200">
            {header}
          </div>
        )}
        <div className="p-4">
          {children}
        </div>
        {footer && (
          <div className="px-4 py-3 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

