import { Heading } from './Heading.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Heading',
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
    weight: {
      control: { type: 'select' },
      options: ['medium', 'bold'],
    },
    children: {
      control: 'text',
    },
  },
  // Default args
  args: {
    level: 'h1',
    weight: 'medium',
    children: 'Example',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const H1Medium = {
  args: {
    level: 'h1',
    weight: 'medium',
    children: 'Example',
  },
};

export const H1Bold = {
  args: {
    level: 'h1',
    weight: 'bold',
    children: 'Example',
  },
};

export const H2Medium = {
  args: {
    level: 'h2',
    weight: 'medium',
    children: 'Example',
  },
};

export const H2Bold = {
  args: {
    level: 'h2',
    weight: 'bold',
    children: 'Example',
  },
};

export const H3Medium = {
  args: {
    level: 'h3',
    weight: 'medium',
    children: 'Example',
  },
};

export const H3Bold = {
  args: {
    level: 'h3',
    weight: 'bold',
    children: 'Example',
  },
};

export const H4Medium = {
  args: {
    level: 'h4',
    weight: 'medium',
    children: 'Example',
  },
};

export const H4Bold = {
  args: {
    level: 'h4',
    weight: 'bold',
    children: 'Example',
  },
};