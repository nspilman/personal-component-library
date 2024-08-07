import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const backdropVariants = cva(
  'fixed inset-0 z-40 flex items-center justify-center transition-opacity',
  {
    variants: {
      color: {
        dark: 'bg-black bg-opacity-50',
        light: 'bg-white bg-opacity-50',
      },
      blur: {
        true: 'backdrop-blur-sm',
        false: '',
      },
    },
    defaultVariants: {
      color: 'dark',
      blur: false,
    },
  }
);

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof backdropVariants> {
  open: boolean;
  onClose?: () => void;
}

export const Backdrop: React.FC<BackdropProps> = ({
  open,
  onClose,
  color,
  blur,
  children,
  className,
  ...props
}) => {
  if (!open) return null;

  return (
    <div
      className={backdropVariants({ color, blur, className })}
      onClick={onClose}
      {...props}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};