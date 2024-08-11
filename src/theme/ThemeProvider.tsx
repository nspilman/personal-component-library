// src/theme/ThemeProvider.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeConfig, themeConfig as defaultThemeConfig } from './theme.config';
import { generateCssVariables } from './generateCssVariables';
import { darkTheme } from './darkTheme';

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemeConfig;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = defaultThemeConfig,
}) => {
  const [theme, setTheme] = useState<ThemeConfig>(initialTheme);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = generateCssVariables(theme);
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Usage example:
// import { ThemeProvider } from './theme/ThemeProvider';
//
// function App() {
//   return (
//     <ThemeProvider>
//       {/* Your app components */}
//     </ThemeProvider>
//   );
// }