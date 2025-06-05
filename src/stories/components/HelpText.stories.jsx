import React from 'react'
import { HelpText } from './HelpText'

export default {
  title: 'Components/HelpText',
  component: HelpText,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'this is help text',
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'text', 'success', 'info'],
    },
  },
  args: {
    children: 'this is help text',
    variant: 'default',
  },
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <HelpText {...args} />

export const Default = Template.bind({})
Default.args = { variant: 'default' }

export const Error = Template.bind({})
Error.args = { variant: 'error' }

export const Success = Template.bind({})
Success.args = { variant: 'success' }

export const Info = Template.bind({})
Info.args = { variant: 'info' }
