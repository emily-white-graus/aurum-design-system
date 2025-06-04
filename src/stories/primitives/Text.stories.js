import { Text } from './Text.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'subtitle', 'body'],
    },
  },
  // Default args
  args: {
    as: 'body',
    children: 'This is example text',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Body = {
  args: {
    as: 'body',
    children: 'This is body text',
  },
};

export const H1 = {
  args: {
    as: 'h1',
    children: 'This is H1 text',
  },
};

export const H2 = {
  args: {
    as: 'h2',
    children: 'This is H2 text',
  },
};

export const H3 = {
  args: {
    as: 'h3',
    children: 'This is H3 text',
  },
};

export const H4 = {
  args: {
    as: 'h4',
    children: 'This is H4 text',
  },
};


export const Subtitle = {
  args: {
    as: 'subtitle',
    children: 'This is subtitle text',
  },
};

export const Paragraph = {
  args: {
    as: 'p',
    children: 'This is paragraph text',
  },
};

