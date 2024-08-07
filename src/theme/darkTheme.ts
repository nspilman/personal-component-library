// src/theme/darkTheme.ts

import { ThemeConfig, themeConfig as baseTheme } from './theme.config';

export const darkTheme: ThemeConfig = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: {
      light: '#60A5FA',
      DEFAULT: '#3B82F6',
      dark: '#2563EB',
    },
    secondary: {
      light: '#34D399',
      DEFAULT: '#10B981',
      dark: '#059669',
    },
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gray: {
      50: '#18191A',
      100: '#242526',
      200: '#3A3B3C',
      300: '#4E4F50',
      400: '#6A6C6D',
      500: '#8A8D90',
      600: '#B0B3B8',
      700: '#D4D5D7',
      800: '#E4E6EB',
      900: '#F5F6F7',
    },
  },
  // You can override other properties here as needed
  boxShadow: {
    ...baseTheme.boxShadow,
    DEFAULT: '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',
    md: '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
    lg: '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
    xl: '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
  },
};