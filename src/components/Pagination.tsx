import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const paginationVariants = cva('flex items-center justify-center space-x-1');

const pageButtonVariants = cva(
  'px-3 py-1 rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      isActive: {
        true: 'bg-primary text-white',
        false: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
      },
      isDisabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      isActive: false,
      isDisabled: false,
    },
  }
);

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof paginationVariants> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  className,
  ...props
}) => {
  const { theme } = useTheme();

  const customStyles = {
    '--pagination-text-color': theme.colors.textPrimary,
    '--pagination-bg-color': theme.colors.backgroundSecondary,
    '--pagination-hover-bg-color': theme.colors.backgroundPrimary,
    '--pagination-active-bg-color': theme.colors.backgroundTertiary,
    '--pagination-active-text-color': theme.colors.textSecondary,
  } as React.CSSProperties;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <button
          key={page}
          className={pageButtonVariants({ isActive: page === currentPage })}
          onClick={() => handlePageChange(page)}
          style={{
            backgroundColor: page === currentPage ? 'var(--pagination-active-bg-color)' : 'var(--pagination-bg-color)',
            color: page === currentPage ? 'var(--pagination-active-text-color)' : 'var(--pagination-text-color)',
          }}
        >
          {page}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className={paginationVariants({ className })} style={customStyles} {...props}>
      {showFirstLast && (
        <button
          className={pageButtonVariants({ isDisabled: currentPage === 1 })}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          style={{ color: 'var(--pagination-text-color)' }}
        >
          First
        </button>
      )}
      <button
        className={pageButtonVariants({ isDisabled: currentPage === 1 })}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ color: 'var(--pagination-text-color)' }}
      >
        <ChevronLeft size={16} />
      </button>
      {renderPageButtons()}
      <button
        className={pageButtonVariants({ isDisabled: currentPage === totalPages })}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ color: 'var(--pagination-text-color)' }}
      >
        <ChevronRight size={16} />
      </button>
      {showFirstLast && (
        <button
          className={pageButtonVariants({ isDisabled: currentPage === totalPages })}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          style={{ color: 'var(--pagination-text-color)' }}
        >
          Last
        </button>
      )}
    </div>
  );
};

Pagination.displayName = 'Pagination';