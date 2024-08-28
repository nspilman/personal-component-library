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
    sm: {
      1: 'sm:grid-cols-1',
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-3',
      4: 'sm:grid-cols-4',
      6: 'sm:grid-cols-6',
      12: 'sm:grid-cols-12',
    },
    md: {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      6: 'md:grid-cols-6',
      12: 'md:grid-cols-12',
    },
    lg: {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
      6: 'lg:grid-cols-6',
      12: 'lg:grid-cols-12',
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
  },
  defaultVariants: {
    cols: 12,
    gap: 4,
  },
});

type GridVariantProps = VariantProps<typeof gridVariants>;

export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, GridVariantProps {}

export const Grid: React.FC<GridProps> = ({ 
  className, 
  cols, 
  sm, 
  md, 
  lg, 
  gap, 
  ...props 
}) => {
  return (
    <div 
      className={gridVariants({ cols, sm, md, lg, gap, className })}
      {...props}
    />
  );
};

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

type ColVariantProps = VariantProps<typeof colVariants>;

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement>, ColVariantProps {}

export const GridItem: React.FC<GridItemProps> = ({ 
  className, 
  span, 
  ...props 
}) => {
  return (
    <div 
      className={colVariants({ span, className })}
      {...props}
    />
  );
};