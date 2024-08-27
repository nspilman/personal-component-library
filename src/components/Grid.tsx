import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const gridVariants = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
    },
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
      12: 'gap-12',
      16: 'gap-16',
      20: 'gap-20'
    },
    responsive: {
      true: 'md:grid-cols-2 lg:grid-cols-3',
    },
  },
  defaultVariants: {
    cols: 12,
    gap: 4,
  },
});

export interface GridProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap, responsive, ...props }, ref) => {


    return (
      <div 
        className={gridVariants({ cols, gap, responsive, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';

const colVariants = cva('', {
  variants: {
    span: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
      full: 'col-span-full',
    },
  },
  defaultVariants: {
    span: 1,
  },
});

export interface GridItemProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof colVariants> {}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, span, ...props }, ref) => {
    return (
      <div 
        className={colVariants({ span, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

GridItem.displayName = 'GridItem';