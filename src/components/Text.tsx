import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold font-header',
      h2: 'text-3xl font-bold font-header',
      h3: 'text-2xl font-bold font-header',
      h4: 'text-xl font-semibold font-header',
      h5: 'text-lg font-semibold font-header',
      h6: 'text-base font-semibold font-header',
      body1: 'text-base font-secondary',
      body2: 'text-sm font-secondary',
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