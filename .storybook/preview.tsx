import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import React from "react";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import { darkTheme } from "../src/theme/darkTheme";

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
      <ThemeProvider initialTheme={darkTheme}>
        <div className="w-full p-8 bg-black">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
