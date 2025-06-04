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

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button',
  },
}

export const PrimaryWithIcon = {
  args: {
    variant: 'primary',
    size: 'medium',
    icon: <CheckIcon />,
    children: 'Primary with Icon',
  },
}

export const PrimaryDisabled = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    children: 'Primary Disabled',
  },
}

// Secondary
export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Secondary Button',
  },
}

export const SecondaryWithIcon = {
  args: {
    variant: 'secondary',
    size: 'medium',
    icon: <CheckIcon />,
    children: 'Secondary with Icon',
  },
}

export const SecondaryDisabled = {
  args: {
    variant: 'secondary',
    size: 'medium',
    disabled: true,
    children: 'Secondary Disabled',
  },
}

// Tertiary
export const Tertiary = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    children: 'Tertiary Button',
  },
}

export const TertiaryWithIcon = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    icon: <CheckIcon />,
    children: 'Tertiary with Icon',
  },
}

export const TertiaryDisabled = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    disabled: true,
    children: 'Tertiary Disabled',
  },
}

// Destructive
export const Destructive = {
  args: {
    variant: 'destructive',
    size: 'medium',
    children: 'Destructive Button',
  },
}

export const DestructiveWithIcon = {
  args: {
    variant: 'destructive',
    size: 'medium',
    icon: <CheckIcon />,
    children: 'Destructive with Icon',
  },
}

export const DestructiveDisabled = {
  args: {
    variant: 'destructive',
    size: 'medium',
    disabled: true,
    children: 'Destructive Disabled',
  },
}
