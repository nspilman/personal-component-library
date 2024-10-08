"use client"
import React, { useState, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const toastVariants = cva(
  'fixed flex items-center w-full max-w-sm rounded-lg shadow-lg p-4 text-white',
  {
    variants: {
      variant: {
        success: 'bg-success',
        error: 'bg-error',
        warning: 'bg-warning',
        info: 'bg-info',
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
      {...props}
    >
      <IconComponent className="w-5 h-5 mr-2" />
      <div className="flex-1">{message}</div>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
        className="ml-auto bg-white bg-opacity-20 rounded-full p-1 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
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