// Text.jsx
import React from 'react';
import './text.css';

export const Text = ({
  as = 'body',
  children,
  size,
  weight,
  letterSpacing,
  lineHeight,
  color,
  className = '',
  ...rest
}) => {
  const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    subtitle: 'h6',
    body: 'p',
    p: 'p'
  };

  const Tag = tagMap[as] || 'span';

  const classes = [
    'text',
    `text-${as}`, // semantic base class
    size && `text-size-${size}`,
    weight && `text-weight-${weight}`,
    letterSpacing && `text-spacing-${letterSpacing}`,
    lineHeight && `text-line-${lineHeight}`,
    color && `text-color-${color.replace('text-', '')}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};
