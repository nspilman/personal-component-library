// src/theme/theme.config.ts

export const themeConfig = {
  colors: {
    // Base Colors
    primary: '#3B82F6',
    secondary: '#10B981',
    tertiary: '#8B5CF6',
    neutral: '#6B7280',

    // Text
    textPrimary: '#1F2937',
    textSecondary: '#4B5563',
    textTertiary: '#9CA3AF',
    textInverse: '#FFFFFF',

    // Background
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F3F4F6',
    backgroundTertiary: '#E5E7EB',
    backgroundInverse: '#1F2937',

    // Interactive
    interactiveDefault: '#3B82F6',
    interactiveHover: '#2563EB',
    interactiveActive: '#1D4ED8',
    interactiveFocus: '#3B82F6',

    // Feedback
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Border
    borderLight: '#E5E7EB',
    borderMedium: '#D1D5DB',
    borderHeavy: '#9CA3AF',
  },

  shadows: {
    shadowSmall: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    shadowMedium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    shadowLarge: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },

  spacing: {
    spaceXxs: '0.25rem',
    spaceXs: '0.5rem',
    spaceSm: '0.75rem',
    spaceMd: '1rem',
    spaceLg: '1.5rem',
    spaceXl: '2rem',
    spaceXxl: '3rem',
  },

  fonts: {
    fontFamilyPrimary: 'Inter, sans-serif',
    fontFamilySecondary: 'Roboto, sans-serif',
    fontSizeXs: '0.75rem',
    fontSizeSm: '0.875rem',
    fontSizeMd: '1rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },

  borderRadius: {
    borderRadiusSm: '0.125rem',
    borderRadiusMd: '0.25rem',
    borderRadiusLg: '0.5rem',
    borderRadiusFull: '9999px',
  },

  zIndex: {
    zIndexDropdown: 1000,
    zIndexSticky: 1020,
    zIndexFixed: 1030,
    zIndexModalBackdrop: 1040,
    zIndexModal: 1050,
    zIndexPopover: 1060,
    zIndexTooltip: 1070,
  },
};

// Type for the theme configuration
export type ThemeConfig = typeof themeConfig;

// Helper type to access nested properties
export type NestedKeyOf<ObjectType extends object> =
  {[Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
  }[keyof ObjectType & (string | number)];

// Type for theme tokens
export type ThemeToken = NestedKeyOf<ThemeConfig>;