import React from 'react'
import { Anchor } from './Anchor'

export default {
  title: 'Primitives/Anchor',
  component: Anchor,
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the anchor links to',
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank'],
      description: 'Specifies where to open the linked document',
    },
    underline: {
      control: 'boolean',
      description: 'Show underline',
    },
    color: {
      control: 'text',
      description: 'Text color',
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'bold'],
      description: 'Font weight',
    },
    children: {
      control: 'text',
      description: 'Link text',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

const Template = (args) => <Anchor {...args} />

export const Default = Template.bind({})
Default.args = {
  href: 'https://example.com',
  target: '_blank',
  underline: true,
  color: 'blue',
  fontWeight: 'medium',
  children: 'Visit Example.com',
}
