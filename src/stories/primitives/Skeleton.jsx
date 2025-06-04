import * as React from 'react'
import { Skeleton as RadixSkeleton } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css"

export const Skeleton = React.forwardRef(
  ({ width = '100%', height = '1rem', radius = 'medium', ...props }, ref) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <RadixSkeleton
                ref={ref}
                width={width}
                height={height}
                radius={radius}
                {...props}
            />
        </div>
    )
  }
)

Skeleton.displayName = 'Skeleton'
