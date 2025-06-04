import { Heading } from './Heading.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Primitives/Heading',
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4'],
    },
    children: {
      control: 'text',
    },
  },
  // Default args
  args: {
    level: 'h1',
    children: 'Example',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const H1 = {
  args: {
    level: 'h1',
    children: 'Example',
  },
};

export const H2 = {
  args: {
    level: 'h2',
    children: 'Example',
  },
};


export const H3 = {
  args: {
    level: 'h3',
    children: 'Example',
  },
};


export const H4 = {
  args: {
    level: 'h4',
    children: 'Example',
  },
};
