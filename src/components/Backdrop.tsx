import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const backdropVariants = cva(
  'fixed inset-0 z-40 flex items-center bg-backgroundSecondary bg-opacity-50 justify-center transition-opacity',
  {
    variants: {
      blur: {
        true: 'backdrop-blur-sm',
        false: '',
      },
    },
    defaultVariants: {
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
  blur,
  children,
  className,
  ...props
}) => {
  if (!open) return null;

  return (
    <div
      className={backdropVariants({ blur, className })}
      onClick={onClose}
      {...props}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};