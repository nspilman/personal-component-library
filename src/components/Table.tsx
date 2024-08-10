import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTheme } from '../theme/ThemeProvider';

const tableVariants = cva(
  'min-w-full divide-y divide-gray-200',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  striped?: boolean;
  hoverable?: boolean;
}

export const Table: React.FC<TableProps> = ({
  className,
  size,
  striped = false,
  hoverable = false,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  const customStyles = {
    '--table-border-color': theme.colors.borderMedium,
    '--table-header-bg-color': theme.colors.backgroundSecondary,
    '--table-header-text-color': theme.colors.textPrimary,
    '--table-body-bg-color': theme.colors.backgroundSecondary,
    '--table-body-text-color': theme.colors.textPrimary,
    '--table-hover-bg-color': theme.colors.backgroundPrimary,
    '--table-stripe-bg-color': theme.colors.borderMedium,
  } as React.CSSProperties;

  return (
    <div className="overflow-x-auto" style={customStyles}>
      <table className={tableVariants({ size, className })} {...props}>
        {children}
      </table>
    </div>
  );
};

export const TableHead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <thead className={`bg-gray-50 ${className}`} style={{ backgroundColor: 'var(--table-header-bg-color)' }} {...props}>
      {children}
    </thead>
  );
};

export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <tbody 
      className={`bg-white divide-y divide-gray-200 ${className}`} 
      style={{ 
        backgroundColor: 'var(--table-body-bg-color)', 
        borderColor: 'var(--table-border-color)' 
      }} 
      {...props}
    >
      {children}
    </tbody>
  );
};

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <tr
      className={`${className} ${props.onClick ? 'cursor-pointer' : ''}`}
      {...props}
    >
      {children}
    </tr>
  );
};

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <td 
      className={`px-6 py-4 whitespace-nowrap ${className}`} 
      style={{ color: 'var(--table-body-text-color)' }} 
      {...props}
    >
      {children}
    </td>
  );
};

export const TableHeader: React.FC<React.ThHTMLAttributes<HTMLTableHeaderCellElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <th
      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${className}`}
      style={{ color: 'var(--table-header-text-color)' }}
      {...props}
    >
      {children}
    </th>
  );
};

Table.displayName = 'Table';
TableHead.displayName = 'TableHead';
TableBody.displayName = 'TableBody';
TableRow.displayName = 'TableRow';
TableCell.displayName = 'TableCell';
TableHeader.displayName = 'TableHeader';