import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const formVariants = cva('space-y-4', {
  variants: {
    layout: {
      vertical: 'space-y-4',
      horizontal: 'sm:flex sm:space-x-4 sm:space-y-0',
    },
  },
  defaultVariants: {
    layout: 'vertical',
  },
});

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>, VariantProps<typeof formVariants> {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({
  className,
  layout,
  children,
  onSubmit,
  ...props
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form className={formVariants({ layout, className })} onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

export const FormGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const FormLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  const customStyles = {
    '--label-text-color': theme.colors.gray['700'],
  } as React.CSSProperties;

  return (
    <label 
      className={`block text-sm font-medium ${className}`} 
      style={customStyles}
      {...props}
    >
      {children}
    </label>
  );
};

export const FormHelperText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  const customStyles = {
    '--helper-text-color': theme.colors.gray['500'],
  } as React.CSSProperties;

  return (
    <p 
      className={`mt-1 text-sm ${className}`} 
      style={customStyles}
      {...props}
    >
      {children}
    </p>
  );
};

Form.displayName = 'Form';
FormGroup.displayName = 'FormGroup';
FormLabel.displayName = 'FormLabel';
FormHelperText.displayName = 'FormHelperText';