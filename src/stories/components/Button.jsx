import * as React from 'react'
import { Box } from '../primitives/Box'
import { Text } from '../primitives/Text'
import './button.css'

export const Button = React.forwardRef(
  (
    {
      variant = 'primary',
      size = 'medium',
      disabled = false,
      icon,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const classes = `
      button
      button--${variant}
      button--${size}
      ${disabled ? 'button--disabled' : ''}
      ${className}
    `.trim()

    return (
      <Box
        ref={ref}
        asChild
        style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        {...props}
        className={classes}
      >
        <button disabled={disabled}>
          {icon && <Box className="button__icon">{icon}</Box>}
          <Text style={{ color: 'inherit' }} as="span">
            {children}
          </Text>
        </button>
      </Box>
    )
  }
)

Button.displayName = 'Button'
