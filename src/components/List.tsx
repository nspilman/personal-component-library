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
    },
    defaultVariants: {
      variant: 'unordered',
    },
  }
);

const listItemVariants = cva(
  'mb-2',
  {
    variants: {
      variant: {
        unordered: 'before:content-["•"] before:mr-2 before:text-gray-500',
        ordered: '',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'unordered',
    },
  }
);

export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement>, VariantProps<typeof listVariants> {
  items: React.ReactNode[];
}

export const List: React.FC<ListProps> = ({ className, variant, items, ...props }) => {
  const ListComponent = variant === 'ordered' ? 'ol' : 'ul';
  const { theme } = useTheme();

  const customStyles = {
    '--list-text-color': theme.colors.textPrimary,
    '--list-bullet-color': theme.colors.textSecondary,
  } as React.CSSProperties;

  return (
    <ListComponent className={listVariants({ variant, className })} style={customStyles} {...props}>
      {items.map((item, index) => (
        <li 
          key={index} 
          className={listItemVariants({ variant })}
          style={{ 
            color: 'var(--list-text-color)',
            '::before': { color: 'var(--list-bullet-color)' }
          }}
        >
          {item}
        </li>
      ))}
    </ListComponent>
  );
};

List.displayName = 'List';