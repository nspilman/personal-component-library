import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cva, type VariantProps } from 'class-variance-authority';

const modalVariants = cva(
  'fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50',
  {
    variants: {
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const contentVariants = cva(
  'bg-backgroundPrimary rounded-lg shadow-lg',
  {
    variants: {
      size: {
        sm: 'w-full max-w-sm',
        md: 'w-full max-w-md',
        lg: 'w-full max-w-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const headerVariants = cva(
  'px-6 py-4 border-b border-borderMedium',
  {
    variants: {
      hasTitle: {
        true: '',
        false: 'hidden',
      },
    },
    defaultVariants: {
      hasTitle: false,
    },
  }
);

const bodyVariants = cva('px-6 py-4');

const footerVariants = cva('px-6 py-4 border-t border-borderMedium flex justify-end');

const closeButtonVariants = cva(
  'px-4 py-2 rounded transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-backgroundSecondary text-textPrimary hover:bg-backgroundTertiary',
        primary: 'bg-primary text-textInverse hover:bg-interactiveHover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  size, 
  children, 
  ...props 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={modalVariants({ size })} onClick={onClose} {...props}>
      <div 
        className={contentVariants({ size })}
        onClick={(e) => e.stopPropagation()} 
        ref={modalRef}
      >
        <div className={headerVariants({ hasTitle: !!title })}>
          <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
        </div>
        <div className={bodyVariants()}>
          {children}
        </div>
        <div className={footerVariants()}>
          <button 
            onClick={onClose}
            className={closeButtonVariants()}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

Modal.displayName = 'Modal';