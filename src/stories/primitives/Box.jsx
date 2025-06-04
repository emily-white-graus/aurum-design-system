import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

export const Box = React.forwardRef(
  (
    {
      asChild = false,
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
          ...style,
        }}
      />
    )
  }
)

Box.displayName = 'Box'
