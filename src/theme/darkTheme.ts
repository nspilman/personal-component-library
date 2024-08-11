// src/theme/darkTheme.ts

import colors from 'tailwindcss/colors';
import { ThemeConfig, themeConfig as baseTheme } from './theme.config';

export const darkTheme: ThemeConfig = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    // Base Colors
    primary: colors.blue[400],
    secondary: colors.emerald[400],
    tertiary: colors.violet[400],
    neutral: colors.gray[400],

    // Text
    textPrimary: colors.gray[50],
    textSecondary: colors.gray[200],
    textTertiary: colors.gray[300],
    textInverse: colors.gray[800],

    // Background
    backgroundPrimary: colors.gray[800],
    backgroundSecondary: colors.gray[700],
    backgroundTertiary: colors.gray[600],
    backgroundInverse: colors.gray[50],

    // Interactive
    interactiveDefault: colors.blue[400],
    interactiveHover: colors.blue[500],
    interactiveActive: colors.blue[600],
    interactiveFocus: colors.blue[400],

    // Feedback
    success: colors.emerald[500],
    warning: colors.yellow[200],
    error: colors.red[500],
    info: colors.blue[400],

    // Border
    borderLight: colors.gray[600],
    borderMedium: colors.gray[500],
    borderHeavy: colors.gray[400],
  },

  shadows: {
    shadowSmall: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    shadowMedium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    shadowLarge: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },

  // We're not overriding spacing, fonts, borderRadius, or zIndex as they typically remain consistent between light and dark themes
};