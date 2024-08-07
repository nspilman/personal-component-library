
// src/theme/generateCssVariables.ts

import { ThemeConfig, ThemeToken } from './theme.config';

function flattenObject(obj: any, prefix: string = ''): Record<string, string> {
  return Object.keys(obj).reduce((acc: Record<string, string>, k: string) => {
    const pre = prefix.length ? `${prefix}-` : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], `${pre}${k}`));
    } else {
      acc[`${pre}${k}`] = obj[k];
    }
    return acc;
  }, {});
}

export function generateCssVariables(theme: ThemeConfig): string {
  const flattenedTheme = flattenObject(theme);

  let cssVariables = ':root {\n';

  (Object.keys(flattenedTheme) as ThemeToken[]).forEach((key) => {
    const value = flattenedTheme[key];
    cssVariables += `  --${key}: ${value};\n`;
  });

  cssVariables += '}\n';

  return cssVariables;
}

// Usage example:
// import { themeConfig } from './theme.config';
// const cssVariables = generateCssVariables(themeConfig);
// console.log(cssVariables);