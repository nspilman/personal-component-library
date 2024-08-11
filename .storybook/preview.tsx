import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import React from "react";
import { ThemeProvider, useTheme } from "../src/theme/ThemeProvider";
import { darkTheme } from "../src/theme/darkTheme";
import { themeConfig } from "../src/theme/theme.config";

const ThemedDecorator = ({children}:{ children: React.ReactElement}) => {
  const { theme } = useTheme();
  
  return (
    <div 
      style={{ 
        backgroundColor: theme.colors.backgroundPrimary,
        color: theme.colors.textPrimary,
      }}
      className="w-full p-8"
    >
      {children}
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themeConfig}>
        <ThemedDecorator >
          <Story/>
          </ThemedDecorator>
      </ThemeProvider>
    ),
  ],
};

export default preview;