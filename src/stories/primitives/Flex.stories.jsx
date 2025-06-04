import React from 'react'
import { Flex } from './Flex'
import { Box } from './Box'

export default {
  title: 'Primitives/Flex',
  component: Flex,
  argTypes: {
    direction: {
      control: { type: 'select' },
      description: 'Direction of the flex container',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justifyContent: {
      control: { type: 'select' },
      description: 'Alignment of items along the main axis',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    alignItems: {
      control: { type: 'select' },
      description: 'Alignment of items along the cross axis',
      options: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline'],
    },
    gapX: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      description: 'Horizontal gap between items',
    },
    gapY: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      description: 'Vertical gap between items',
    },
    wrap: {
      control: 'boolean',
      description: 'Whether the flex items should wrap onto multiple lines',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

const Template = (args) => (
  <Flex style={{ width: '400px', height: '400px' }} {...args}>
    <Box style={{ width: '64px', height: '64px', backgroundColor: 'teal' }} />
    <Box style={{ width: '64px', height: '64px', backgroundColor: 'orange' }} />
    <Box style={{ width: '64px', height: '64px', backgroundColor: 'pink' }} />
  </Flex>
)

export const Playground = Template.bind({})
Playground.args = {
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gapX: 2,
  gapY: 2,
  wrap: false,
}

export const Row = Template.bind({})
Row.args = {
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gapX: 2,
  gapY: 2,
  wrap: false,
}

export const Column = Template.bind({})
Column.args = {
  direction: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gapX: 2,
  gapY: 2,
  wrap: false,
}
