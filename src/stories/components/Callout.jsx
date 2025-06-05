import React from 'react';
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import './callout.css';

/**
 * The Callout component is a non-disruptive content block used to surface supporting information in context. It provides users with helpful, advisory, or cautionary content that enriches the experience without demanding immediate action. Unlike alerts, callouts are used within flows, not interrupting them.
 * 
 * Purpose of callout components :
 * 
 * To offer relevant, visually distinct guidance that enhances clarity or draws attention to useful information in a page or feature.
 * 
 * @param {string} variant - The variant type: 'default', 'success', 'warning', or 'danger'
 * @param {string} children - The content to display in the callout
 * @param {string} className - Additional CSS classes
 */

export const Callout = ({
  variant = "default",
  message,
}) => {
  const iconMap = {
    default: <Info size={18} />,
    warning: <AlertCircle size={18} />,
    success: <CheckCircle size={18} />,
    danger: <AlertTriangle size={18} />,
  };

  return (
    <Box className={`callout callout-${variant}`}>
      <Stack direction="row" align="center" gap="4">
        <Box className="callout-icon">{iconMap[variant]}</Box>
        <Text as="span" className="callout-message">
          {message}
        </Text>
      </Stack>
    </Box>
  );
};
