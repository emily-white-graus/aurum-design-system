import React from 'react'
import { Text } from '../primitives/Text'
import './HelpText.css'

export const HelpText = ({ children, variant = 'default', className = '', ...props }) => {
  return (
    <Text 
      as="span"
      className={`help-text help-text--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Text>
  )
}
