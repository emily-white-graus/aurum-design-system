import React from 'react';
import { Text } from './Text'; 

/**
 * **Headings**
 * 
 * **Do:**
 * - Use Heading/H1 (32px, medium) only once per page for main page titles.
 * - Use Heading/H2 (24px, medium) for major sections beneath H1.
 * - Use Heading/H3 (20px, medium) for sub-sections within H2 blocks.
 * - Use Heading/H4 (18px, medium) for nested headings or in cards/modules.
 * - Maintain line height and letter spacing exactly as defined per style.
 * - Apply headings consistently across all pages and templates.
 * 
 * **Don’t:**
 * - Don’t use heading styles in arbitrary order (e.g., H1 → H3 directly).
 * - Don’t apply heading styles purely for visual emphasis, use based on structure.
 * - Don’t modify font size, weight, or spacing outside the design system tokens.
 * - Don’t mix multiple heading levels within the same block of content without hierarchy.
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
