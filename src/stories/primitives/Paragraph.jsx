import React from 'react';
import { Text } from './Text';

/**
 * **Paragraph (Body Text)**
 * 
 * **Do:**
 * - Use for body text and general content.
 * - Keep line height at 24px for optimal readability.
 * - Maintain consistent margins and padding around text blocks.
 * 
 * **Don’t:**
 * - Don’t use paragraph style for headings or UI labels.
 * - Don’t alter font weight (should remain regular).
 * - Don’t reduce font size below 18px on primary content (for accessibility).
 */

export const Paragraph = ({ children, className = '', ...rest }) => {
  return (
    <Text as="p" className={`paragraph ${className}`} {...rest}>
      {children}
    </Text>
  );
};
