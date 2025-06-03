import React from 'react'
import { List } from './List'

export default {
  title: 'Primitives/List',
  component: List,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['unordered', 'ordered'],
      description: 'The list type: ordered or unordered',
    },
    items: {
      control: { type: 'array' },
      description: 'List of strings to render',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

const Template = (args) => <List {...args} />

export const Unordered = Template.bind({})
Unordered.args = {
  type: 'unordered',
  items: ['First item', 'Second item', 'Third item'],
}

export const Ordered = Template.bind({})
Ordered.args = {
  type: 'ordered',
  items: ['Step one', 'Step two', 'Step three'],
}
