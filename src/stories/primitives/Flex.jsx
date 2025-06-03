import * as React from 'react'
import { Box } from './Box'

export const Flex = React.forwardRef(
  (
    {
      children,
      direction = 'row',
      justifyContent = 'flex-start',
      alignItems = 'stretch',
      gapX = 0,
      gapY = 0,
      wrap = false,
      style = {},
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        asChild={false}
        width="auto"
        height="auto"
        backgroundImage="none"
        border="none"
        borderRadius="0"
        style={{
          display: 'flex',
          flexDirection: direction,
          alignItems,
          justifyContent,
          flexWrap: wrap ? 'wrap' : 'nowrap',
          columnGap: gapX ? `${gapX * 4}px` : undefined,
          rowGap: gapY ? `${gapY * 4}px` : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Flex.displayName = 'Flex'
