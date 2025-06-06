import * as React from 'react'
import { Paragraph } from './Paragraph'

/**
 * **Unordered List**
 * 
 * **Do:**
 * - Use for non-sequential items where order does not matter.
 * - Use bullet points for visual clarity.
 * - Use when listing options, features, or steps without priority.
 * - Keep the font size of body paragraph (18px) consistent for all list items.
 * 
 * **Don’t:**
 * - Don’t use unordered lists for ordered or step-based information.
 * - Don’t mix bullets with other icons or symbols.
 * 
 * **Ordered List**
 * 
 * **Do:**
 * - Use for sequential steps, ranked items, or instructions where order matters.
 * - Use default numbering style (1, 2, 3…) and for nested: (a, b, c…).
 * 
 * **Don’t:**
 * - Don’t use numbered lists for unordered information.
 * - Don’t manually override the list marker styles.
 * - Don’t reset numbering unless contextually required.
 */

export const List = React.forwardRef(
  ({ type = 'unordered', items = [], style = {}, ...props }, ref) => {
    const ListTag = type === 'ordered' ? 'ol' : 'ul'

    return (
      <ListTag
        ref={ref}
        style={{
          paddingLeft: '1.25rem',
          margin: 0,
          ...style,
        }}
        {...props}
      >
        {items.map((item, idx) => (
          <li key={idx}>
            <Paragraph>{item}</Paragraph>
          </li>
        ))}
      </ListTag>
    )
  }
)

List.displayName = 'List'
