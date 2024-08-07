import React from 'react';
import { Star } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

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
  const { theme } = useTheme();

  const customStyles = {
    '--star-color': theme.colors.yellow['400'],
    '--star-inactive-color': theme.colors.gray['300'],
  } as React.CSSProperties;

  const handleClick = (newValue: number) => {
    if (!readOnly && onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex" style={customStyles}>
      {[...Array(max)].map((_, index) => (
        <Star
          key={index}
          size={24}
          className={`cursor-pointer ${
            index < value ? 'text-yellow-400 fill-current' : 'text-gray-300'
          } ${readOnly ? 'cursor-default' : ''}`}
          onClick={() => handleClick(index + 1)}
          style={{
            color: index < value ? 'var(--star-color)' : 'var(--star-inactive-color)',
          }}
        />
      ))}
    </div>
  );
};

Rating.displayName = 'Rating';