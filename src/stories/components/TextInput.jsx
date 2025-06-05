import React from 'react'
import { Box } from '../primitives/Box'
import { Text } from '../primitives/Text'
import './TextInput.css'
import { AlertCircle } from 'lucide-react'

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
