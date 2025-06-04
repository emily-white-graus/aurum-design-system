import React from 'react';
import { Text } from './Text'; 

/**
 * Heading component renders semantic heading levels using the Text primitive.
 * Automatically applies the correct size and weight based on the level.
 *
 * @param {string} level - The heading level: 'h1', 'h2', 'h3', or 'h4'
 * @param {React.ReactNode} children - The text content to display
 * @param {string} className - Additional CSS classes
 * @param {object} ...rest - Additional props to pass to the Text component
 */
export const Heading = ({
  level = 'h1',
  children,
  className = '',
  ...rest
}) => {
  return (
    <Text
      as={level}
      className={`heading ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
};
