import { Box } from './Box';

export default {
  title: 'Primitives/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Hello World',
    style: {
        width: '64px',
        height: '64px',
        backgroundImage: 'repeating-linear-gradient(45deg, #2a2a2a 0, #2a2a2a 2px, #1a1a1a 2px, #1a1a1a 4px)',
        border: '1px solid #444',
        borderRadius: '6px',
    }
  },
};