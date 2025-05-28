import { themes } from '@storybook/theming';
import "./preview.css";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    },

    // Add theming for docs using Storybook's theming API
    docs: {
      theme: {
        ...themes.light,
        
        // Brand
        brandTitle: 'Aurum Design System',
        brandUrl: './',
        
        // Typography
        fontBase: '"Avenir", "Inter", "Helvetica Neue", Arial, sans-serif',
        fontCode: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
        
        // Colors
        colorPrimary: '#FF6600',
        colorSecondary: '#FF6600',
        
        // UI
        appBg: '#ffffff',
        appContentBg: '#ffffff',
        appPreviewBg: '#ffffff',
        appBorderColor: '#e0e0e0',
        appBorderRadius: 4,
        
        // Text colors
        textColor: '#333333',
        textInverseColor: '#ffffff',
        textMutedColor: '#666666',
        
        // Toolbar
        barTextColor: '#333333',
        barHoverColor: '#FF6600',
        barSelectedColor: '#FF6600',
        barBg: '#ffffff',
        
        // Form inputs
        inputBg: '#ffffff',
        inputBorder: '#e0e0e0',
        inputTextColor: '#333333',
        inputBorderRadius: 4,
        
        // Button
        buttonBg: '#FF6600',
        buttonBorder: '#FF6600',
        booleanBg: '#e0e0e0',
        booleanSelectedBg: '#FF6600',
      },
    },
  },
};

export default preview;