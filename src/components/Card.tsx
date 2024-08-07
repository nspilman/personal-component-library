import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const cardVariants = cva(
  'rounded-lg overflow-hidden',
  {
    variants: {
      variant: {
        elevated: 'shadow-md bg-white',
        outlined: 'border border-gray-200 bg-white',
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
    const { theme } = useTheme();

    const customStyles = {
      '--card-border-color': theme.colors.gray['200'],
      '--card-bg-color': theme.colors.white,
    } as React.CSSProperties;

    return (
      <div 
        className={cardVariants({ variant, width, className })} 
        ref={ref} 
        style={customStyles}
        {...props}
      >
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