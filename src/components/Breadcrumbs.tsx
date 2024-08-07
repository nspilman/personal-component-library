import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const breadcrumbsVariants = cva('flex items-center space-x-2');

const itemVariants = cva('text-sm', {
  variants: {
    isLast: {
      true: 'font-semibold text-gray-900',
      false: 'text-gray-500 hover:text-gray-700',
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

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof breadcrumbsVariants> {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className,
  ...props
}) => {
  const { theme } = useTheme();

  const customStyles = {
    '--breadcrumb-text-color': theme.colors.gray['500'],
    '--breadcrumb-hover-color': theme.colors.gray['700'],
    '--breadcrumb-active-color': theme.colors.gray['900'],
    '--breadcrumb-separator-color': theme.colors.gray['400'],
  } as React.CSSProperties;

  return (
    <nav aria-label="Breadcrumb" style={customStyles}>
      <ol className={breadcrumbsVariants({ className })} {...props}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2" style={{ color: 'var(--breadcrumb-separator-color)' }} />}
            {index === items.length - 1 ? (
              <span 
                className={itemVariants({ isLast: true })}
                style={{ color: 'var(--breadcrumb-active-color)' }}
              >
                {item.label}
              </span>
            ) : (
              <a 
                href={item.href} 
                className={itemVariants()}
                style={{ color: 'var(--breadcrumb-text-color)' }}
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