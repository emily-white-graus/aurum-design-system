/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  }
};
export default config;