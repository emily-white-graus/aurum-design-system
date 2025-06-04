import * as React from 'react'
import { Paragraph } from './Paragraph'

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
