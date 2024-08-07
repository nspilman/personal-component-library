import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const dividerVariants = cva(
  'border-t',
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
  const { theme } = useTheme();

  const customStyles = {
    '--divider-color-light': theme.colors.gray['200'],
    '--divider-color-dark': theme.colors.gray['700'],
  } as React.CSSProperties;

  return (
    <hr 
      className={dividerVariants({ color, thickness, className })} 
      style={{
        ...customStyles,
        borderColor: color === 'light' ? 'var(--divider-color-light)' : 'var(--divider-color-dark)',
      }}
      {...props} 
    />
  );
};

Divider.displayName = 'Divider';