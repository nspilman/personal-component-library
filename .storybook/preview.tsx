import type { Preview } from "@storybook/react";
import "../src/app/globals.css"
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators:[
    (Story) => ( 
    <div className="w-full p-8">
        <Story />
      </div>
    )
  ]
};

export default preview;
