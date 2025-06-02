import React from 'react';
import './text.css';

/**
 * Text component displays text with different sizes, weights, spacing, and colors.
 * @param {string} as - The semantic text type: 'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'subtitle', 'body'
 * @param {React.ReactNode} children - The text content to display
 * @param {string} size - Override text size: 'xs', 'sm', 'md', 'lg', 'xl'
 * @param {string} weight - Override font weight: 'normal', 'bold'
 * @param {string} letterSpacing - Override letter spacing: 'normal', 'wide'
 * @param {string} lineHeight - Override line height: 'tight', 'normal', 'relaxed', 'loose'
 * @param {string} color - Text color: 'text-primary', 'text-secondary', 'text-placeholder', 'text-link', 'text-error', 'text-button', 'text-success', 'text-on-color'
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Additional props to pass to the text element
 */

export const Text = (props) => {
  const {
    as = 'body',
    children,
    size,
    weight,
    letterSpacing,
    lineHeight,
    color,
    className = '',
    ...rest
  } = props;

  const Tag = 'span';

  // Build class names based on props
  const classes = [
    'text',
    `text-${as}`, // Base semantic style
    size && `text-size-${size}`, // Override size if provided
    weight && `text-weight-${weight}`, // Override weight if provided
    letterSpacing && `text-spacing-${letterSpacing}`, // Override spacing if provided
    lineHeight && `text-height-${lineHeight}`, // Override line height if provided
    color && `text-color-${color.replace('text-', '')}`, // Override color if provided
    className
  ].filter(Boolean).join(' ');

  return (
    <Tag
      role={as}
      className={classes}
      {...rest}
    >
      {children}
    </Tag>
  );
};