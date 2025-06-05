import React from 'react';
import { Box } from '../primitives/Box';
import { Text } from '../primitives/Text';
import { ExternalLink } from 'lucide-react';
import './Anchor.css';

/**
 * Anchor component with support for default, hover, visited, disabled states
 * and optional external link icon.
 *
 * @param {string} href - The URL the anchor points to
 * @param {boolean} disabled - Whether the anchor is disabled
 * @param {boolean} withIcon - Whether to show an external link icon
 * @param {string} children - The link text
 * @param {string} className - Optional additional classes
 */
export const Anchor = ({
  href,
  disabled = false,
  withIcon = false,
  children,
  className = '',
  ...props
}) => {
  const finalClass = `anchor ${disabled ? 'anchor-disabled' : ''} ${className}`.trim();

  return (
    <Box as="a"
      className={finalClass}
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <Text 
        as="span" 
        className="badge-text">
        {children}
      </Text>
      {withIcon && <ExternalLink size={14} className="anchor-icon" />}
    </Box>
  );
};
