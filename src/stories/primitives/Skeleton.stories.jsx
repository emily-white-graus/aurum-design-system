import React from 'react'
import { Skeleton } from './Skeleton'

export default {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the skeleton',
      defaultValue: '100%',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton',
      defaultValue: '1rem',
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large', 'full'],
      description: 'Border radius of the skeleton',
      defaultValue: 'medium',
    },
  },
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

const Template = (args) => <Skeleton {...args} />

export const Default = Template.bind({})
Default.args = {
  width: '200px',
  height: '20px',
  radius: 'medium',
}
