import * as React from 'react'
import { Skeleton as RadixSkeleton } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

const variantStyles = {
  shape: {
    width: '100px',
    height: '100px',
    radius: 'full',
  },
  header: {
    width: '60%',
    height: '32px',
    radius: 'medium',
  },
  text: {
    width: '80%',
    height: '16px',
    radius: 'small',
  },
  button: {
    width: '120px',
    height: '40px',
    radius: 'large',
  },
}

export const Skeleton = React.forwardRef(
  ({ variant, width, height, radius, ...props }, ref) => {
    const variantStyle = variant ? variantStyles[variant] : {}

    const resolvedWidth = width || variantStyle.width || '100%'
    const resolvedHeight = height || variantStyle.height || '1rem'
    const resolvedRadius = radius || variantStyle.radius || 'medium'

    // If width is percentage-based, wrap in constrained parent
    const needsWrapper = typeof resolvedWidth === 'string' && resolvedWidth.includes('%')

    const content = (
      <RadixSkeleton
        ref={ref}
        width={resolvedWidth}
        height={resolvedHeight}
        radius={resolvedRadius}
        {...props}
      />
    )

    return needsWrapper ? (
      <div style={{ width: '300px' /* or any fixed constraint */, display: 'inline-block' }}>
        {content}
      </div>
    ) : (
      <div style={{ display: 'inline-block' }}>{content}</div>
    )
  }
)

Skeleton.displayName = 'Skeleton'
