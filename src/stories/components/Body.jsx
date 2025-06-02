import React from 'react';
import './body.css';

/**
 * Body component displays paragraph text with different sizes and font weights.
 * @param {string} size - The body size: 'body-1', 'body-2', 'body-3', or 'body-4'
 * @param {string} weight - The font weight: 'regular' or 'bold'
 * @param {string} children - The text content to display
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props to pass to the paragraph element
 */

export const Body = (props) => {
  const { size = 'body-1', weight = 'regular', children, className = '', ...rest } = props;

  const bodyClass = `body body-${size} body-${weight} ${className}`;

  return (
    <p className={bodyClass} {...rest}>
      {children}
    </p>
  );
};