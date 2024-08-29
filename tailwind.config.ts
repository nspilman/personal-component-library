// tailwind.config.js


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--colors-primary)',
        secondary: 'var(--colors-secondary)',
        tertiary: 'var(--colors-tertiary)',
        neutral: 'var(--colors-neutral)',
        textPrimary: 'var(--colors-textPrimary)',
        textSecondary: 'var(--colors-textSecondary)',
        textTertiary: 'var(--colors-textTertiary)',
        textInverse: 'var(--colors-textInverse)',
        backgroundPrimary: 'var(--colors-backgroundPrimary)',
        backgroundSecondary: 'var(--colors-backgroundSecondary)',
        backgroundTertiary: 'var(--colors-backgroundTertiary)',
        backgroundInverse: 'var(--colors-backgroundInverse)',
        warning: 'var(--colors-warning)',
        success: 'var(--colors-success)',
        error: 'var(--colors-error)',
        info: 'var(--colors-info)',
      },
      boxShadow: {
        shadowSmall: 'var(--shadow-shadowSmall)',
        shadowMedium: 'var(--shadow-shadowMedium)',
        shadowLarge: 'var(--shadow-shadowLarge)',
      },
      spacing: {
        spaceXxs: 'var(--space-spaceXxs)',
        spaceXs: 'var(--space-spaceXs)',
        spaceSm: 'var(--space-spaceSm)',
        spaceMd: 'var(--space-spaceMd)',
        spaceLg: 'var(--space-spaceLg)',
        spaceXl: 'var(--space-spaceXl)',
        spaceXxl: 'var(--space-spaceXxl)',
      },
      fontFamily: {
        primary: 'var(--font-fontFamilyPrimary)',
        secondary: 'var(--font-fontFamilySecondary)',
        header: 'var(--font-fontFamilyHeader)',
      },
      fontSize: {
        xs: 'var(--font-fontSizeXs)',
        sm: 'var(--font-fontSizeSm)',
        md: 'var(--font-fontSizeMd)',
        lg: 'var(--font-fontSizeLg)',
        xl: 'var(--font-fontSizeXl)',
      },
      fontWeight: {
        light: 'var(--font-fontWeightLight)',
        regular: 'var(--font-fontWeightRegular)',
        medium: 'var(--font-fontWeightMedium)',
        bold: 'var(--font-fontWeightBold)',
      },
      borderRadius: {
        sm: 'var(--borderRadius-borderRadiusSm)',
        md: 'var(--borderRadius-borderRadiusMd)',
        lg: 'var(--borderRadius-borderRadiusLg)',
        full: 'var(--borderRadius-borderRadiusFull)',
      },
      zIndex: {
        dropdown: 'var(--zIndex-zIndexDropdown)',
        sticky: 'var(--zIndex-zIndexSticky)',
        fixed: 'var(--zIndex-zIndexFixed)',
        modalBackdrop: 'var(--zIndex-zIndexModalBackdrop)',
        modal: 'var(--zIndex-zIndexModal)',
        popover: 'var(--zIndex-zIndexPopover)',
        tooltip: 'var(--zIndex-zIndexTooltip)',
      },
    },
  },
  plugins: [],
}