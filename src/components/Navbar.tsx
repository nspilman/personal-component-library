"use client"
import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Menu, X } from 'lucide-react';

const navbarVariants = cva(
  'bg-backgroundSecondary shadow-md',
  {
    variants: {
      sticky: {
        true: 'sticky top-0 z-50',
        false: '',
      },
    },
    defaultVariants: {
      sticky: false,
    },
  }
);

const navLinkVariants = cva(
  'text-textPrimary hover:text-primary transition-colors',
  {
    variants: {
      active: {
        true: 'font-semibold',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof navbarVariants> {
  logo: React.ReactNode;
  links: NavLink[];
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  sticky,
  logo,
  links,
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={navbarVariants({ sticky, className })} {...props}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {logo}
          </div>
          <div className="hidden md:flex space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={navLinkVariants()}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-textPrimary hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={navLinkVariants({ className: 'block px-3 py-2 rounded-md text-base font-medium' })}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.displayName = 'Navbar';