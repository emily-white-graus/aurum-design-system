import React from 'react';
import { Box } from '../primitives/Box';
import { Text } from '../primitives/Text';
import { ExternalLink } from 'lucide-react';
import './Anchor.css';

/**
 * 
 * **Do:**
 *
 * - Use anchors for navigating to other pages, sections, or external resources.
 * - Use underlined text styling to visually distinguish links from body text.
 * - Ensure color and style changes are applied for each state:
 *   - Default – primary link color
 *   - Hover – slightly darker or underlined
 *   - Visited – purple tone to indicate visited state
 *   - Disabled – gray tone, non-interactive
 * - Add an external link icon for URLs that open outside the current product.
 * - Use descriptive link text (avoid “click here”).
 * 
 * **Don't:**
 *
 * - Don’t use anchor styling on buttons — use < button > for actions.
 * - Don’t remove underlines unless another strong visual cue is used.
 * - Don’t disable links without a clear visual indicator.
 * - Don’t place icons without appropriate spacing.
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
