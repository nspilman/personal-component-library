// src/theme/darkTheme.ts

import { ThemeConfig, themeConfig as baseTheme } from './theme.config';

export const darkTheme: ThemeConfig = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    // Base Colors
    primary: '#60A5FA',
    secondary: '#34D399',
    tertiary: '#A78BFA',
    neutral: '#9CA3AF',

    // Text
    textPrimary: '#F9FAFB',
    textSecondary: '#E5E7EB',
    textTertiary: '#D1D5DB',
    textInverse: '#1F2937',

    // Background
    backgroundPrimary: '#1F2937',
    backgroundSecondary: '#374151',
    backgroundTertiary: '#4B5563',
    backgroundInverse: '#F9FAFB',

    // Interactive
    interactiveDefault: '#60A5FA',
    interactiveHover: '#3B82F6',
    interactiveActive: '#2563EB',
    interactiveFocus: '#60A5FA',

    // Feedback
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#60A5FA',

    // Border
    borderLight: '#4B5563',
    borderMedium: '#6B7280',
    borderHeavy: '#9CA3AF',
  },

  shadows: {
    shadowSmall: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    shadowMedium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    shadowLarge: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },

  // We're not overriding spacing, fonts, borderRadius, or zIndex as they typically remain consistent between light and dark themes
};