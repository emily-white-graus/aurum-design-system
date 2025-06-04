import React, { useState } from 'react'
import { RadioButton } from './RadioButton'

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => {
  const [selected, setSelected] = useState(args.checked)

  return (
    <RadioButton
      {...args}
      checked={selected}
      onChange={() => setSelected(true)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  name: 'radio',
  value: 'default',
}

export const Checked = Template.bind({})
Checked.args = {
  label: 'Label',
  name: 'radio',
  value: 'checked',
  checked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Label',
  name: 'radio',
  value: 'disabled',
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  label: 'Label',
  name: 'radio',
  value: 'error',
  checked: true,
  error: true,
}
