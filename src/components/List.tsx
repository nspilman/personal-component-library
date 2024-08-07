import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

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

  return (
    <ListComponent className={listVariants({ variant, className })} {...props}>
      {items.map((item, index) => (
        <li key={index} className={listItemVariants({ variant })}>
          {item}
        </li>
      ))}
    </ListComponent>
  );
};