import * as React from 'react'
import { Box } from '../primitives/Box'

export const Anchor = React.forwardRef(
  (
    {
      href,
      target = '_self',
      rel,
      children,
      underline = true,
      color = 'blue',
      fontWeight = 'medium',
      style = {},
      ...props
    },
    ref
  ) => {
    const computedRel =
      target === '_blank' && !rel ? 'noopener noreferrer' : rel

    return (
      <Box
        ref={ref}
        as="a"
        href={href}
        target={target}
        rel={computedRel}
        fontWeight={fontWeight}
        color={color}
        textDecoration={underline ? 'underline' : 'none'}
        style={{
          cursor: 'pointer',
          ...style,
        }}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Anchor.displayName = 'Anchor'
