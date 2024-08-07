import React, { useState, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Upload, X } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const uploaderVariants = cva(
  'border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors',
  {
    variants: {
      state: {
        idle: 'border-gray-300 hover:border-gray-400',
        drag: 'border-primary-500 bg-primary-50',
        error: 'border-red-500 bg-red-50',
      },
    },
    defaultVariants: {
      state: 'idle',
    },
  }
);

export interface ImageUploaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof uploaderVariants> {
  onImageUpload: (file: File) => void;
  maxSizeInMB?: number;
  acceptedFileTypes?: string[];
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  className,
  onImageUpload,
  maxSizeInMB = 5,
  acceptedFileTypes = ['image/jpeg', 'image/png', 'image/gif'],
  ...props
}) => {
  const [dragState, setDragState] = useState<'idle' | 'drag' | 'error'>('idle');
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  const customStyles = {
    '--uploader-border-color': theme.colors.gray['300'],
    '--uploader-hover-border-color': theme.colors.gray['400'],
    '--uploader-drag-border-color': theme.colors.primary['500'],
    '--uploader-drag-bg-color': theme.colors.primary['50'],
    '--uploader-error-border-color': theme.colors.red['500'],
    '--uploader-error-bg-color': theme.colors.red['50'],
    '--uploader-text-color': theme.colors.gray['700'],
  } as React.CSSProperties;

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setDragState('drag');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragState('idle');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragState('idle');
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleFile = (file: File) => {
    if (!acceptedFileTypes.includes(file.type)) {
      setDragState('error');
      return;
    }
    if (file.size > maxSizeInMB * 1024 * 1024) {
      setDragState('error');
      return;
    }
    setPreview(URL.createObjectURL(file));
    onImageUpload(file);
  };

  const removeImage = () => {
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div
      className={uploaderVariants({ state: dragState, className })}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      style={{
        ...customStyles,
        borderColor: dragState === 'drag' ? 'var(--uploader-drag-border-color)' : 
                     dragState === 'error' ? 'var(--uploader-error-border-color)' : 
                     'var(--uploader-border-color)',
        backgroundColor: dragState === 'drag' ? 'var(--uploader-drag-bg-color)' : 
                         dragState === 'error' ? 'var(--uploader-error-bg-color)' : 
                         'transparent',
        color: 'var(--uploader-text-color)',
      }}
      {...props}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        accept={acceptedFileTypes.join(',')}
        className="hidden"
      />
      {preview ? (
        <div className="relative">
          <img src={preview} alt="Preview" className="max-w-full max-h-64 mx-auto" />
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeImage();
            }}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div>
          <Upload className="mx-auto mb-2" size={24} />
          <p>Drag and drop an image here, or click to select a file</p>
          <p className="text-sm text-gray-500 mt-1">
            Max size: {maxSizeInMB}MB. Accepted types: {acceptedFileTypes.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

ImageUploader.displayName = 'ImageUploader';