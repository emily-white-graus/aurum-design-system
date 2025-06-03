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
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'subtitle', 'body'],
    },
    size: {
      control: { type: 'select' },
      options: [null, 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    weight: {
      control: { type: 'select' },
      options: [null, 'normal', 'bold'],
    },
    letterSpacing: {
      control: { type: 'select' },
      options: [null, 'normal', 'wide'],
    },
    lineHeight: {
      control: { type: 'select' },
      options: [null, 'tight', 'normal', 'relaxed', 'loose'],
    },
    color: {
      control: { type: 'select' },
      options: [null, 'text-primary', 'text-secondary', 'text-placeholder', 'text-link', 'text-error', 'text-button', 'text-success', 'text-on-color'],
    },
    children: {
      control: 'text',
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

// Override Examples
export const BodyWithLargeSize = {
  args: {
    as: 'body',
    size: 'lg',
    children: 'Body text with large size override',
  },
};

export const H4Bold = {
  args: {
    as: 'h4',
    weight: 'bold',
    children: 'H4 text with bold weight override',
  },
};

export const SecondaryColor = {
  args: {
    as: 'body',
    color: 'text-secondary',
    children: 'Text with secondary color',
  },
};

export const ErrorText = {
  args: {
    as: 'body',
    color: 'text-error',
    weight: 'bold',
    children: 'Error message text',
  },
};

export const SuccessText = {
  args: {
    as: 'body',
    color: 'text-success',
    weight: 'bold',
    children: 'Success message text',
  },
};

export const LinkText = {
  args: {
    as: 'body',
    color: 'text-link',
    children: 'This looks like a link',
  },
};

export const CustomSpacing = {
  args: {
    as: 'subtitle',
    letterSpacing: 'wide',
    children: 'Text with wide letter spacing',
  },
};

export const CustomLineHeight = {
  args: {
    as: 'body',
    lineHeight: 'relaxed',
    children: 'Text with relaxed line height for better readability in longer content',
  },
};