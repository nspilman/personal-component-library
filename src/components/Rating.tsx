import React from 'react';
import { Star } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const ratingContainerVariants = cva('flex');

const starVariants = cva('', {
  variants: {
    isActive: {
      true: 'text-warning fill-current',
      false: 'text-interactiveActive',
    },
    isReadOnly: {
      true: 'cursor-default',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    isActive: false,
    isReadOnly: false,
  },
});

export interface RatingProps extends VariantProps<typeof ratingContainerVariants> {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  readOnly?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  onChange,
  max = 5,
  readOnly = false,
}) => {
  const handleClick = (newValue: number) => {
    if (!readOnly && onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={ratingContainerVariants()}>
      {[...Array(max)].map((_, index) => (
        <Star
          key={index}
          size={24}
          className={starVariants({ 
            isActive: index < value, 
            isReadOnly: readOnly 
          })}
          onClick={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
};

Rating.displayName = 'Rating';