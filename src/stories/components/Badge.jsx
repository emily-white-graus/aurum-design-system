import React from 'react'
import './Badge.css'
import { Box } from '../primitives/Box'
import { Text } from '../primitives/Text'
import { Stack } from '../primitives/Stack'

export const Badge = ({
  children,
  variant = 'default',
  icon,
  iconOnly = false,
  ...props
}) => {
  return (
    <Box className={`badge badge--${variant}`} {...props}>
      <Stack direction='row' gap='1'>
      {!iconOnly && (
        <Text as="span" className="badge-text">
          {children}
        </Text>
      )}
      {icon && (
        <span className="badge-icon">
          {icon}
        </span>
      )}
      </Stack>
    </Box>
  )
}
