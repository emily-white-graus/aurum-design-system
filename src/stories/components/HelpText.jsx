import React from 'react'
import { Text } from '../primitives/Text'
import './HelpText.css'

/**
 * **Do:**
 *
 * - Use help text to assist or inform users near form elements or interactive inputs.
 * - Place help text below the corresponding input or label.
 * - Match the status variant to the content context:
 *   - **Default**: General guidance (e.g., "You can change this later.")
 *   - **Error**: Validation message or error explanation
 *   - **Success**: Confirm correct input or successful action
 *   - **Info**: Neutral informative note or clarification
 * - Keep help text brief and clear (1–2 short sentences).
 * - Apply appropriate semantic color styles per variant (e.g., red for error, green for success).
 *
 * **Don’t:**
 *
 * - Don’t use help text as a replacement for form labels or placeholders.
 * - Don’t mix multiple help text styles (e.g., success + error) in a single component.
 * - Don’t overload help text with too much content or full paragraphs.
 * - Don’t use help text for critical alerts — use callouts or banners instead.
 */


export const HelpText = ({ children, variant = 'default', className = '', ...props }) => {
  return (
    <Text 
      as="span"
      className={`help-text help-text--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Text>
  )
}
