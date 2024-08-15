import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-semibold',
      h6: 'text-base font-semibold',
      body1: 'text-base',
      body2: 'text-sm',
      caption: 'text-xs',
    },
    color: {
      default: 'text-textPrimary',
      secondary: 'text-textSecondary',
      primary: 'text-primary',
    },
  },
  defaultVariants: {
    variant: 'body1',
    color: 'default',
  },
});

type HTMLPropsWithoutColor = Omit<React.HTMLAttributes<HTMLElement>, 'color'>;

export interface TypographyProps
  extends HTMLPropsWithoutColor,
    VariantProps<typeof textVariants> {
  component?: React.ElementType;
}

export const Text = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, component, ...props }, ref) => {
    const Component = component || 'p';

    return (
      <Component
        className={textVariants({ variant, color, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export default Text;