import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';


const avatarVariants = cva(
  'inline-flex items-center justify-center overflow-hidden rounded-full bg-backgroundSecondary text-textPrimary',
  {
    variants: {
      size: {
        sm: 'w-8 h-8 text-xs',
        md: 'w-12 h-12 text-sm',
        lg: 'w-16 h-16 text-base',
        xl: 'w-20 h-20 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  initials?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  size,
  src,
  alt,
  initials,
  ...props
}) => {



  return (
    <div 
      className={avatarVariants({ size, className })} 
      {...props}
    >
      {src ? (
        <img src={src} alt={alt || 'Avatar'} className="w-full h-full object-cover" />
      ) : initials ? (
        <span className="font-medium" >{initials}</span>
      ) : (
        <svg className="w-full h-full bg-backgroundTertiary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';