import { Paragraph } from './Paragraph';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'This is a paragraph with standard text styling.',
  },
};

export const Default = {
  args: {
    children: 'This is a default paragraph component.',
  },
};
