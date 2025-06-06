import * as React from 'react'
import { Box } from '../primitives/Box'
import { Text } from '../primitives/Text'
import './button.css'

/**
 * **Sizes:**
 *
 * - Use **Small** for compact UIs (e.g., table rows, cards).
 * - Use **Medium** as the default size across most use cases.
 * - Use **Large** for high-emphasis actions (e.g., onboarding, hero sections).
 *
 * **Do:**
 *
 * - Maintain consistent spacing between buttons (8–16px).
 * - Ensure contrast ratios meet accessibility standards (AA/AAA).
 * - Apply padding and corner radius per size token spec.
 *
 * **Don't:**
 *
 * - Don’t combine more than two button styles in one UI section.
 * - Don’t use icon-only buttons unless they are universally understood (e.g., trash, close).
 */

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
