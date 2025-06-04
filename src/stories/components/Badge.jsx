import React from 'react'
import './Badge.css'
import { Box } from '../primitives/Box'
import { Text } from '../primitives/Text'

export const Badge = ({
  children,
  variant = 'default',
  icon,
  iconOnly = false,
  ...props
}) => {
  return (
    <Box className={`badge badge--${variant}`} {...props}>
      {icon && (
        <span className="badge-icon">
          {icon}
        </span>
      )}
      {!iconOnly && (
        <Text as="span" className="badge-text">
          {children}
        </Text>
      )}
    </Box>
  )
}
