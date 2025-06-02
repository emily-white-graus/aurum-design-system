import { Body } from './Body.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Body',
  component: Body,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['body-1', 'body-2', 'body-3', 'body-4'],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'bold'],
    },
    children: {
      control: 'text',
    },
  },
  // Default args
  args: {
    size: 'body-1',
    weight: 'regular',
    children: 'Automate bills. Organise how you spend. Save in clever new ways. All with a free Monzo Current Account.',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Body1Regular = {
  args: {
    size: 'body-1',
    weight: 'regular',
    children: 'Automate bills. Organise how you spend. Save in clever new ways. All with a free Monzo Current Account.',
  },
};

export const Body1Bold = {
  args: {
    size: 'body-1',
    weight: 'bold',
    children: 'Automate bills. Organise how you spend. Save in clever new ways. All with a free Monzo Current Account.',
  },
};

export const Body2Regular = {
  args: {
    size: 'body-2',
    weight: 'regular',
    children: 'Automate bills. Organise how you spend. Save in clever new ways. All with a free Monzo Current Account.',
  },
};

export const Body2Bold = {
  args: {
    size: 'body-2',
    weight: 'bold',
    children: 'Automate bills. Organise how you spend. Save in clever new ways. All with a free Monzo Current Account.',
  },
};

export const Body3Regular = {
  args: {
    size: 'body-3',
    weight: 'regular',
    children: 'Automate bills. Organise how you spend. Save in clever new ways. All with a free Monzo Current Account.',
  },
};

export const Body3Bold = {
  args: {
    size: 'body-3',
    weight: 'bold',
    children: 'Automate bills. Organise how you spend. Save in clever new ways. All with a free Monzo Current Account.',
  },
};

export const Body4Regular = {
  args: {
    size: 'body-4',
    weight: 'regular',
    children: 'Automate bills. Organise how you spend. Save in clever new ways. All with a free Monzo Current Account.',
  },
};

export const Body4Bold = {
  args: {
    size: 'body-4',
    weight: 'bold',
    children: 'Automate bills. Organise how you spend. Save in clever new ways. All with a free Monzo Current Account.',
  },
};