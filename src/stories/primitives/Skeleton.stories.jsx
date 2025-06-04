import React from 'react'
import { Skeleton } from './Skeleton'

export default {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['shape', 'header', 'text', 'button'],
      description: 'Visual preset styles for common skeleton types',
    },
  },
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

const Template = (args) => <Skeleton {...args} />

export const Shape = Template.bind({})
Shape.args = { variant: 'shape' }

export const Header = Template.bind({})
Header.args = { variant: 'header' }

export const Text = Template.bind({})
Text.args = { variant: 'text' }

export const Button = Template.bind({})
Button.args = { variant: 'button' }

export const Custom = Template.bind({})
Custom.args = {
  width: '250px',
  height: '24px',
  radius: 'small',
}
