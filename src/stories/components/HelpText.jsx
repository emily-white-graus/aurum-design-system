import React from 'react'
import { Text } from '../primitives/Text'
import './HelpText.css'

export const HelpText = ({ children, variant = 'default', className = '', ...props }) => {
  return (
    <Text 
      style={{ color: 'inherit' }}
      as="subtitle"
      className={`help-text help-text--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Text>
  )
}
