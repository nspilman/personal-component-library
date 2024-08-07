import React from 'react';
import { Star } from 'lucide-react';

export interface RatingProps {
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
    <div className="flex">
      {[...Array(max)].map((_, index) => (
        <Star
          key={index}
          size={24}
          className={`cursor-pointer ${
            index < value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          } ${readOnly ? 'cursor-default' : ''}`}
          onClick={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
};