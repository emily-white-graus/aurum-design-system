import React from 'react'
import { Box } from '../primitives/Box'
import { Text } from '../primitives/Text'
import './TextInput.css'
import { AlertCircle } from 'lucide-react'

/**
 * **Do:**
 * 
 * - Use input fields for structured user data entry (e.g., names, emails, dates, phone numbers).
 * - Use text area for multi-line input (e.g., comments, descriptions).
 * - Apply helper text where additional guidance is needed.
 * - Maintain label and placeholder pairing for all fields.
 * - Use clear and distinct visual states:
 *   - **Enabled:** Ready for input.
 *   - **Hover:** Highlights the field boundary on pointer hover.
 *   - **Focus:** Shows focus type cursor for clarity.
 *   - **Disabled:** Non-editable with reduced opacity.
 *   - **Error:** Red border with icon and error message.
 * 
 * **Don’t:**
 * 
 * - Don’t leave fields unlabeled — always provide a clear label.
 * - Don’t rely on placeholder text alone for context or instructions.
 * - Don’t mix visual states (e.g., hover + disabled).
 * - Don’t suppress error states — always display feedback when input is invalid.
 * - Don’t use the same styling for disabled and enabled states.
 */

export const TextInput = React.forwardRef(
  (
    {
      label,
      placeholder = '',
      disabled = false,
      error = false,
      value,
      onChange,
      className = '',
      ...props
    },
    ref
  ) => {
    const wrapperClass = `
      text-input-wrapper
      ${disabled ? 'text-input--disabled' : ''}
      ${error ? 'text-input--error' : ''}
      ${className}
    `.trim()

    return (
        <Box className={wrapperClass}>
          <input
            ref={ref}
            className="text-input"
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...props}
          />
          {error && (
            <Box className="text-input__error-icon">
              <AlertCircle size={18} />
            </Box>
          )}
        </Box>
    )
  }
)

TextInput.displayName = 'TextInput'
