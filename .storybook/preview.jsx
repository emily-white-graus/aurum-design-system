import React from 'react';
import './preview.css';
import '../src/styles/tokens.css';
import { Theme } from '@radix-ui/themes';
import { aurumTheme } from './theme.js';

const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];

const preview = {
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo"
    },
    docs: {
      theme: aurumTheme,
    },
    options: {
      storySort: {
        order: [
          'Documentation',
          'Tokens',
          'Primitives',
          'Components',
          'POC components',
          'POC',
        ],
      },
    },
  },
};

export default preview;

