# Your Component Library Name

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Theming](#theming)
  - [Using the Default Theme](#using-the-default-theme)
  - [Customizing the Theme](#customizing-the-theme)
  - [Creating a Custom Theme](#creating-a-custom-theme)
  - [Switching Themes](#switching-themes)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Introduction

[Your introduction to the component library]

## Installation

```bash
npm install your-component-library
```

## Usage

```jsx
import React from 'react';
import { Button, ThemeProvider } from 'your-component-library';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me!</Button>
    </ThemeProvider>
  );
}
```

## Theming

Our component library now supports a flexible theming system that allows you to easily customize the look and feel of all components.

### Using the Default Theme

To use the default theme, simply wrap your application with the `ThemeProvider`:

```jsx
import { ThemeProvider } from 'your-component-library';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### Customizing the Theme

You can customize the theme by passing a theme object to the `ThemeProvider`:

```jsx
import { ThemeProvider, themeConfig } from 'your-component-library';

const customTheme = {
  ...themeConfig,
  colors: {
    ...themeConfig.colors,
    primary: {
      light: '#4DA8DA',
      DEFAULT: '#007CBC',
      dark: '#005C8F',
    },
    // ... other color overrides
  },
  // ... other theme property overrides
};

function App() {
  return (
    <ThemeProvider initialTheme={customTheme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### Creating a Custom Theme

To create a completely custom theme, you can extend the base `ThemeConfig` type:

```typescript
import { ThemeConfig } from 'your-component-library';

const myCustomTheme: ThemeConfig = {
  colors: {
    primary: {
      light: '#4DA8DA',
      DEFAULT: '#007CBC',
      dark: '#005C8F',
    },
    // ... other colors
  },
  fonts: {
    sans: 'Roboto, sans-serif',
    mono: 'Roboto Mono, monospace',
  },
  // ... other theme properties
};
```

### Switching Themes

You can dynamically switch themes using the `setTheme` function provided by the `useTheme` hook:

```jsx
import { ThemeProvider, useTheme } from 'your-component-library';
import { darkTheme } from './darkTheme';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(darkTheme)}>
      Switch to Dark Theme
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      {/* Other components */}
    </ThemeProvider>
  );
}
```

## Components

[List and brief description of available components]

## Contributing

[Guidelines for contributing to the project]

## License

[Your license information]