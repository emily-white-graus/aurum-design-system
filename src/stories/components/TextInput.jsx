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
      <Box style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {label && (
          <Text
            as="label"
            style={{
              fontSize: 'var(--font-label-label-2-regular-font-size)',
              lineHeight: 'var(--font-label-label-2-regular-line-height)',
              fontWeight: 'var(--font-label-label-2-medium-font-weight)',
              color: disabled
                ? 'var(--primitives-color-grey-200)'
                : 'var(--primitives-color-navy-100)',
            }}
          >
            {label}
          </Text>
        )}

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
              <AlertCircle size={16} />
            </Box>
          )}
        </Box>
      </Box>
    )
  }
)

TextInput.displayName = 'TextInput'
