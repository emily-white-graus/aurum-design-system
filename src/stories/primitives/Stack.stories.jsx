import React from 'react'
import { Stack } from './Stack'
import { Box } from './Box'

export default {
  title: 'Primitives/Stack',
  component: Stack,
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['column', 'row'],
      description: 'Stack direction (vertical or horizontal)',
    },
    gap: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Gap between children (in spacing units)',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

const Template = (args) => (
  <Stack {...args}>
    <Box style={{ width: '64px', height: '64px', backgroundColor: 'teal' }} />
    <Box style={{ width: '64px', height: '64px', backgroundColor: 'orange' }} />
    <Box style={{ width: '64px', height: '64px', backgroundColor: 'pink' }} />
  </Stack>
)

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'column',
  gap: 2,
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'row',
  gap: 2,
}
