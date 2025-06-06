import React from 'react'
import './RadioButton.css'
import { Text } from '../primitives/Text'

/**
 * **Do:**
 * 
 * - Use for exclusive selections (e.g., choosing one shipping method).
 * - Place radio buttons in a group with a clear label.
 * - Show clear visual feedback for each state:
 *   - **On**: filled circle with strong outline
 *   - **Off**: empty circle
 *   - **Disabled**: faded styling with no interactivity
 *   - **Error**: red-styled outline and label
 * - Ensure keyboard accessibility (arrow key navigation within group).
 * 
 * **Don’t:**
 * 
 * - Don’t use for multi-select actions — use checkboxes instead.
 * - Don’t allow more than one item to be selected in the same group.
 * - Don’t rely on color alone — include labels and state indicators.
 */

export const RadioButton = ({
  id,
  name,
  value,
  label,
  checked,
  disabled = false,
  error = false,
  onChange,
  className = '',
  ...props
}) => {
  const variantClass = disabled
    ? 'radio--disabled'
    : error
    ? 'radio--error'
    : checked
    ? 'radio--checked'
    : ''

  return (
    <label className={`radio-container ${variantClass} ${className}`.trim()}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="radio-input"
        {...props}
      />
      <span className="radio-circle" />
      <Text as="span" className="radio-label">
        {label}
      </Text>
    </label>
  )
}
