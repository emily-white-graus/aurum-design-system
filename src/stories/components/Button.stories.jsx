import React from 'react'
import { Button } from './Button'
import { CheckIcon } from '@radix-ui/react-icons'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      description: 'Visual style of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    icon: {
      control: 'boolean',
      description: 'Toggle icon inside button (left side)',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    icon: false,
    children: 'Button',
  },
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => {
  const icon = args.icon ? <CheckIcon /> : null
  return <Button {...args} icon={icon} />
}

export const Playground = Template.bind({})
