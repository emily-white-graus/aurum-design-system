import React from 'react'
import './RadioButton.css'
import { Text } from '../primitives/Text'

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
