import { create } from '@storybook/theming/create';

export const aurumTheme = create({
  base: 'light',
  brandTitle: 'Aurum Design System',
  brandUrl: './',
  fontBase: '"Avenir", "Helvetica Neue", Arial, sans-serif',
  fontCode: '"SF Mono", "Monaco", monospace',
  
  // Main colors
  colorPrimary: '#FF6600',
  colorSecondary: '#FF6600',
  
  // App colors
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e0e0e0',
  
  // Text colors
  textColor: '#333333',
  textInverseColor: '#ffffff',
  textMutedColor: '#666666',
  
  // Toolbar colors
  barTextColor: '#333333',
  barHoverColor: '#FF6600', 
  barSelectedColor: '#FF6600',
  barBg: '#ffffff',
  
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e0e0e0',
  inputTextColor: '#333333',
  inputBorderRadius: 4,
  
  // Button colors
  buttonBg: '#FF6600',
  buttonBorder: '#FF6600',
  booleanBg: '#e0e0e0',
  booleanSelectedBg: '#FF6600',
});