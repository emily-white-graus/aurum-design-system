import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

export const Box = React.forwardRef(
  (
    {
      asChild = false,
      width = '64px',
      height = '64px',
      backgroundImage = 'repeating-linear-gradient(45deg, #2a2a2a 0, #2a2a2a 2px, #1a1a1a 2px, #1a1a1a 4px)',
      border = '1px solid #444',
      borderRadius = '6px',
      style = {},
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        {...props}
        style={{
          width,
          height,
          backgroundImage,
          border,
          borderRadius,
          ...style,
        }}
      />
    )
  }
)

Box.displayName = 'Box'
