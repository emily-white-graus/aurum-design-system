import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

// Create custom theme for the Storybook manager (sidebar)
const aurumTheme = create({
  base: 'light',
  
  // Brand
  brandTitle: 'Aurum Design System',
  brandUrl: './',
  brandTarget: '_self',
  
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
  
  // Sidebar
  treeViewBg: '#ffffff',
  
  // Buttons
  buttonBg: '#FF6600',
  buttonBorder: '#FF6600',
  booleanBg: '#e0e0e0',
  booleanSelectedBg: '#FF6600',
});

// Configure the theme
addons.setConfig({
  theme: aurumTheme,
});