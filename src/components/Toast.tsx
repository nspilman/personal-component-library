import React, { useState, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const toastVariants = cva(
  'fixed flex items-center w-full max-w-sm rounded-lg shadow-lg p-4 text-white',
  {
    variants: {
      variant: {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500',
      },
      position: {
        'top-right': 'top-4 right-4',
        'top-left': 'top-4 left-4',
        'bottom-right': 'bottom-4 right-4',
        'bottom-left': 'bottom-4 left-4',
      },
    },
    defaultVariants: {
      variant: 'info',
      position: 'top-right',
    },
  }
);

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
  message: string;
  duration?: number;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  className,
  variant,
  position,
  message,
  duration = 3000,
  onClose,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();

  const customStyles = {
    '--toast-bg-color': theme.colors.backgroundSecondary,
    '--toast-text-color': theme.colors.textPrimary,
    '--toast-icon-color': theme.colors.warning,
  } as React.CSSProperties;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const IconComponent = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  }[variant || 'info'];

  return (
    <div 
      className={toastVariants({ variant, position, className })} 
      role="alert" 
      style={{
        ...customStyles,
        backgroundColor: 'var(--toast-bg-color)',
        color: 'var(--toast-text-color)',
      }}
      {...props}
    >
      <IconComponent className="w-5 h-5 mr-2" style={{ color: 'var(--toast-icon-color)' }} />
      <div className="flex-1">{message}</div>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
        className="ml-auto bg-white bg-opacity-20 rounded-full p-1 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close"
      >
        <X className="w-4 h-4" style={{ color: 'var(--toast-icon-color)' }} />
      </button>
    </div>
  );
};

Toast.displayName = 'Toast';

// Toast Container Component
export const ToastContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className="fixed inset-0 pointer-events-none flex flex-col items-end justify-start p-4 gap-4" {...props}>
      {children}
    </div>
  );
};

ToastContainer.displayName = 'ToastContainer';