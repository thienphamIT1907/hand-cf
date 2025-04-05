import { designTokens } from './src/libs/antd/designToken.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: designTokens.colors.primary,
        background: designTokens.colors.text,
        foreground: designTokens.colors.background,
        dark: designTokens.colors.dark,
      },
      spacing: {
        sm: designTokens.spacing.sm,
        md: designTokens.spacing.md,
        lg: designTokens.spacing.lg,
      },
      fontFamily: {
        // roboto: designTokens.typography.fontFamily,
      },
      borderRadius: {
        default: designTokens.borderRadius.default,
      },
    },
  },
  plugins: [],
};
