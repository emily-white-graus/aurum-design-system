import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Box } from './Box';

export const Flex = React.forwardRef(
  (
    {
      asChild = false,
      direction = 'row',
      alignItems = 'flex-start',
      justifyContent = 'flex-start',
      wrap = false,
      gapX,
      gapY,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Box
        asChild
        ref={ref}
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
        <Comp>{children}</Comp>
      </Box>
    );
  }
);

Flex.displayName = 'Flex';
