import React from 'react';
import { Text } from './Text';

/**
 * Paragraph component for displaying body text.
 * Always renders a paragraph tag with predefined body styling.
 */
export const Paragraph = ({ children, className = '', ...rest }) => {
  return (
    <Text as="p" className={`paragraph ${className}`} {...rest}>
      {children}
    </Text>
  );
};
