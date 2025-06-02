import React from 'react';
import './heading.css';

/**
 * Heading component displays text with different heading levels and font weights.
 * @param {string} level - The heading level: 'h1', 'h2', 'h3', or 'h4'
 * @param {string} weight - The font weight: 'medium' or 'bold'
 * @param {string} children - The text content to display
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props to pass to the heading element
 */

export const Heading = (props) => {
  const { level = 'h1', weight = 'medium', children, className = '', ...rest } = props;

  const HeadingTag = level;
  const headingClass = `heading heading-${level} heading-${weight} ${className}`;

  return (
    <HeadingTag className={headingClass} {...rest}>
      {children}
    </HeadingTag>
  );
};