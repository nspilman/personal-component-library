import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

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
  'bg-white rounded-lg shadow-xl',
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
  const { theme } = useTheme();

  const customStyles = {
    '--modal-bg-color': theme.colors.backgroundPrimary,
    '--modal-text-color': theme.colors.textPrimary,
    '--modal-border-color': theme.colors.borderMedium,
    '--modal-shadow-color': theme.shadows.shadowLarge,
  } as React.CSSProperties;

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
        style={{
          ...customStyles,
          backgroundColor: 'var(--modal-bg-color)',
          color: 'var(--modal-text-color)',
          boxShadow: `0 4px 6px -1px var(--modal-shadow-color), 0 2px 4px -1px var(--modal-shadow-color)`,
        }}
      >
        {title && (
          <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--modal-border-color)' }}>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        )}
        <div className="px-6 py-4">
          {children}
        </div>
        <div className="px-6 py-4 border-t flex justify-end" style={{ borderColor: 'var(--modal-border-color)' }}>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
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