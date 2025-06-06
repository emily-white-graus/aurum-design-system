import React from 'react'
import './Badge.css'
import { Box } from '../primitives/Box'
import { Text } from '../primitives/Text'
import { Stack } from '../primitives/Stack'

/**
 * **Do:**
 *
 * - Use badges to represent status (e.g., success, warning), types, or tags.
 * - Keep badge labels short and readable (ideally 1–2 words).
 * - Use icons to reinforce meaning where helpful.
 * - Pair badges with their respective content (e.g., beside headings, inside tables, on cards).
 * - Select the proper semantic style:
 *   - Default — neutral
 *   - Error — critical or failed state
 *   - Success — positive result
 *   - Warning — cautionary or pending state
 *   - Disabled — unavailable or inactive state
 *
 * **Don't:**
 *
 * - Don’t use badges as interactive elements — they are non-clickable by default.
 * - Don’t overload with text — badges are meant for brief context only.
 * - Don’t use similar colors for different meanings (e.g., error and warning).
 * - Don’t mix too many badge types together in a single view.
 */


export const Badge = ({
  children,
  variant = 'default',
  icon,
  iconOnly = false,
  ...props
}) => {
  return (
    <Box className={`badge badge--${variant}`} {...props}>
      <Stack direction='row' gap='1'>
      {!iconOnly && (
        <Text as="span" className="badge-text">
          {children}
        </Text>
      )}
      {icon && (
        <span className="badge-icon">
          {icon}
        </span>
      )}
      </Stack>
    </Box>
  )
}
