import * as React from 'react'
import { Flex } from './Flex'

export const Stack = React.forwardRef(
  ({ direction = 'column', gap = 2, children, ...props }, ref) => {
    const isVertical = direction === 'column'
    return (
      <Flex
        ref={ref}
        direction={direction}
        gapX={isVertical ? 0 : gap}
        gapY={isVertical ? gap : 0}
        {...props}
      >
        {children}
      </Flex>
    )
  }
)

Stack.displayName = 'Stack'
