import * as React from 'react'

const variantStyles = {
  shape: {
    width: '100px',
    height: '100px',
    radius: '9999px',
  },
  header: {
    width: '300px',
    height: '32px',
    radius: '8px',
  },
  text: {
    width: '250px',
    height: '16px',
    radius: '4px',
  },
  button: {
    width: '120px',
    height: '40px',
    radius: '12px',
  },
}

// Pure CSS keyframes for shimmer effect
const shimmerKeyframes = `
  @keyframes skeleton-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`

// Inject keyframes only once
if (
  typeof document !== 'undefined' &&
  !document.getElementById('skeleton-shimmer')
) {
  const styleTag = document.createElement('style')
  styleTag.id = 'skeleton-shimmer'
  styleTag.innerHTML = shimmerKeyframes
  document.head.appendChild(styleTag)
}

export const Skeleton = React.forwardRef(
  ({ variant, width, height, radius, style = {}, ...props }, ref) => {
    const variantStyle = variant ? variantStyles[variant] : {}

    const resolvedWidth = width || variantStyle.width || '100%'
    const resolvedHeight = height || variantStyle.height || '1rem'
    const resolvedRadius = radius || variantStyle.radius || '4px'

    return (
      <div
        ref={ref}
        {...props}
        style={{
          width: resolvedWidth,
          height: resolvedHeight,
          borderRadius: resolvedRadius,
          background:
            'linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeleton-shimmer 1.5s infinite',
          ...style,
        }}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'
