import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronRight } from 'lucide-react';

const breadcrumbsVariants = cva('flex items-center space-x-2');

const itemVariants = cva('text-sm text-textSecondary hover:font-semibold', {
  variants: {
    isLast: {
      true: 'font-semibold text-textPrimary',
      false: '',
    },
  },
  defaultVariants: {
    isLast: false,
  },
});

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLOListElement>, VariantProps<typeof breadcrumbsVariants> {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className,
  ...props
}) => {


  return (
    <nav aria-label="Breadcrumb">
      <ol className={breadcrumbsVariants({ className })} {...props}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 color-borderHeavy" />}
            {index === items.length - 1 ? (
              <span 
                className={itemVariants({ isLast: true })}
              >
                {item.label}
              </span>
            ) : (
              <a 
                href={item.href} 
                className={itemVariants()}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';