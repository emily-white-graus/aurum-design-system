import * as React from 'react'

/**
 * **Do:**
 * 
 * - Use skeletons to indicate loading states for page-level or component-level content.
 * - Apply the appropriate skeleton type depending on the UI element:
 *   - **Header Skeleton:** for titles or headings
 *   - **Text Skeleton:** for body copy or paragraphs
 *   - **Shape Skeleton:** for avatars, icons, or media (e.g., circular or square)
 *   - **Button Skeleton:** for actionable elements during loading
 * - Match the skeleton dimensions to the actual content it will replace.
 * - Use subtle animation (e.g., shimmer or pulse) to indicate active loading.
 * - Maintain proper spacing and layout structure — mimic the final content layout.
 * 
 * **Don’t:**
 * 
 * - Don’t use skeletons for static or cached content.
 * - Don’t animate too aggressively — keep visual motion subtle and non-distracting.
 * - Don’t combine skeletons with spinners or loaders in the same component.
 * - Don’t leave skeletons visible too long — they should be replaced immediately once content is ready.
 * - Don’t use incorrect shapes (e.g., circular skeletons for rectangular buttons).
 * 
 * **When to Use:**
 * 
 * - API-driven content where load times exceed 500ms.
 * - Page transitions or tab switches where significant data is expected.
 * - Card lists, tables, or sections where users expect multiple data items.
 */

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

// (CSS keyframes for shimmer effect)
const shimmerKeyframes = `
  @keyframes skeleton-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`


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
