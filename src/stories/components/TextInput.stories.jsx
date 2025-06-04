import React, { useState } from 'react'
import { TextInput } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input field',
    },
    error: {
      control: 'boolean',
      description: 'Displays error icon inside input',
    },
  },
  args: {
    label: 'Your Name',
    placeholder: 'Enter your name',
    disabled: false,
    error: false,
  },
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => {
  const [value, setValue] = useState('')

  return (
    <TextInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export const Default = Template.bind({})

export const Disabled = {
  args: {
    disabled: true,
  },
}

export const Error = {
  args: {
    error: true,
    value: 'Invalid name',
  },
}
