import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertTriangleIcon as AlertIcon, CheckCircle, XCircle, Info, X } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const alertVariants = cva(
  'p-4 rounded-md flex items-start',
  {
    variants: {
      variant: {
        info: 'bg-blue-100 text-blue-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const iconVariants = cva(
  'w-5 h-5 mr-3 mt-0.5',
  {
    variants: {
      variant: {
        info: 'text-blue-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
        error: 'text-red-500',
      },
    },
  }
);

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ 
  variant, 
  title, 
  children, 
  onClose,
  className,
  ...props 
}) => {
  const { theme } = useTheme();
  const IconComponent = {
    info: Info,
    success: CheckCircle,
    warning: AlertIcon,
    error: XCircle,
  }[variant || 'info'];

  const customStyles = {
    '--alert-bg-color': theme.colors.backgroundSecondary,
    '--alert-text-color': theme.colors.textPrimary,
    '--alert-icon-color': theme.colors.warning
  } as React.CSSProperties;

  return (
    <div 
      className={alertVariants({ variant, className })} 
      role="alert" 
      style={{
        ...customStyles,
        backgroundColor: 'var(--alert-bg-color)',
        color: 'var(--alert-text-color)',
      }}
      {...props}
    >
      <IconComponent className={iconVariants({ variant })} style={{ color: 'var(--alert-icon-color)' }} />
      <div className="flex-1">
        {title && <h3 className="font-semibold mb-1">{title}</h3>}
        <div>{children}</div>
      </div>
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-auto -mr-1 -mt-1 p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
          aria-label="Close alert"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

Alert.displayName = 'Alert';

export default Alert;