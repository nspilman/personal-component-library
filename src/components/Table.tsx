import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const tableContainerVariants = cva('overflow-x-auto');

const tableVariants = cva(
  'min-w-full divide-y divide-borderMedium',
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

const tableHeadVariants = cva('bg-backgroundSecondary');

const tableBodyVariants = cva('bg-backgroundSecondary divide-y divide-borderMedium');

const tableRowVariants = cva('', {
  variants: {
    clickable: {
      true: 'cursor-pointer',
      false: '',
    },
  },
  defaultVariants: {
    clickable: false,
  },
});

const tableCellVariants = cva('px-6 py-4 whitespace-nowrap text-textPrimary');

const tableHeaderVariants = cva('px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-textPrimary');

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
  return (
    <div className={tableContainerVariants()}>
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
    <thead className={tableHeadVariants({ className })} {...props}>
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
    <tbody className={tableBodyVariants({ className })} {...props}>
      {children}
    </tbody>
  );
};

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement> & { clickable?: boolean }> = ({
  className,
  clickable,
  children,
  ...props
}) => {
  return (
    <tr className={tableRowVariants({ clickable, className })} {...props}>
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
    <td className={tableCellVariants({ className })} {...props}>
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
    <th className={tableHeaderVariants({ className })} {...props}>
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