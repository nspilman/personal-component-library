import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const listVariants = cva(
  'list-none',
  {
    variants: {
      variant: {
        unordered: 'pl-5',
        ordered: 'pl-8',
        none: '',
      },
      theme: {
        light: 'text-textPrimary',
        dark: 'text-textPrimary',
      },
    },
    defaultVariants: {
      variant: 'unordered',
      theme: 'light',
    },
  }
);

const listItemVariants = cva(
  'mb-2',
  {
    variants: {
      variant: {
        unordered: 'before:mr-2 before:text-textSecondary',
        ordered: '',
        none: '',
      },
    },
    compoundVariants: [
      {
        variant: 'unordered',
        className: 'before:content-["•"]',
      },
    ],
    defaultVariants: {
      variant: 'unordered',
    },
  }
);

export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement>, VariantProps<typeof listVariants> {
  items: React.ReactNode[];
}

export const List: React.FC<ListProps> = ({ className, variant, theme, items, ...props }) => {
  const ListComponent = variant === 'ordered' ? 'ol' : 'ul';
  const { theme: themeContext } = useTheme();

  const currentTheme = theme || themeContext;

  return (
    <ListComponent className={listVariants({ variant, className })} {...props}>
      {items.map((item, index) => (
        <li 
          key={index} 
          className={listItemVariants({ variant })}
        >
          {item}
        </li>
      ))}
    </ListComponent>
  );
};

List.displayName = 'List';