// src/theme/theme.config.ts

import colors from "tailwindcss/colors";

type DefaultColors = typeof colors;
type ColorValue = string | DefaultColors[keyof DefaultColors];

export const themeConfig = {
  colors: {
    // Base Colors
    primary: colors.blue[500],
    secondary: colors.emerald[500],
    tertiary: colors.violet[500],
    neutral: colors.gray[500],

    // Text
    textPrimary: colors.gray[800],
    textSecondary: colors.gray[600],
    textTertiary: colors.gray[400],
    textInverse: colors.white,

    // Background
    backgroundPrimary: colors.white,
    backgroundSecondary: colors.gray[100],
    backgroundTertiary: colors.gray[200],
    backgroundInverse: colors.gray[800],

    // Interactive
    interactiveDefault: colors.blue[500],
    interactiveHover: colors.blue[600],
    interactiveActive: colors.blue[700],
    interactiveFocus: colors.blue[500],

    // Feedback
    success: colors.emerald[500],
    warning: colors.yellow[400],
    error: colors.red[500],
    info: colors.blue[500],

    // Border
    borderLight: colors.gray[200],
    borderMedium: colors.gray[300],
    borderHeavy: colors.gray[400],
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
} as const;

// Type for the theme configuration
export type ThemeConfig = {
  colors: { [K in keyof typeof themeConfig['colors']]: ColorValue };
  shadows: { [K in keyof typeof themeConfig['shadows']]: string };
  spacing: { [K in keyof typeof themeConfig['spacing']]: string };
  fonts: { [K in keyof typeof themeConfig['fonts']]: string | number };
  borderRadius: { [K in keyof typeof themeConfig['borderRadius']]: string };
  zIndex: { [K in keyof typeof themeConfig['zIndex']]: number };
};

// Helper type to access nested properties
export type NestedKeyOf<ObjectType extends object> =
  {[Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
  }[keyof ObjectType & (string | number)];

// Type for theme tokens
export type ThemeToken = NestedKeyOf<ThemeConfig>;
