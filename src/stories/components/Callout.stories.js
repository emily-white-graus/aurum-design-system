import { Callout } from './Callout';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger'],
    },
    children: {
      control: 'text',
    },
  },
  // Default args
  args: {
    variant: 'default',
    children: 'This is a default callout for Monzo Bank.',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    variant: 'default',
    children: 'This is a default callout for Monzo Bank.',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'This is a success callout for Monzo Bank.',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'This is a warning callout for Monzo Bank.',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'This is a danger callout for Monzo Bank.',
  },
};