import React from 'react';
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import './callout.css';

/**
 * **Default Callout:**
 *
 * **Do:**
 * - Use for neutral or general information, tips, or contextual help.
 * - Place inline with forms, settings, or guidance sections.
 * - Use when no specific status (success/warning/danger) is needed.
 *
 * **Don’t:**
 * - Don’t use for critical alerts or errors.
 * - Don’t stack multiple default callouts in close proximity.
 *
 * ---
 *
 * **Success Callout:**
 *
 * **Do:**
 * - Use to confirm positive actions (e.g., successful transactions, form submissions).
 * - Place near the action area that triggered the success.
 *
 * **Don’t:**
 * - Don’t use for passive updates or neutral information.
 * - Don’t combine success with warning/danger indicators.
 *
 * ---
 *
 * **Warning Callout:**
 *
 * **Do:**
 * - Use to inform users of potential risks or upcoming required actions (e.g., expiring cards, missing documents).
 * - Use when the user still has time or an option to resolve the issue.
 *
 * **Don’t:**
 * - Don’t use for errors that have already occurred—use **Danger** instead.
 * - Don’t overuse—reserve for content that truly needs caution.
 *
 * ---
 *
 * **Danger Callout:**
 *
 * **Do:**
 * - Use for critical errors or irreversible actions (e.g., failed payments, account issues).
 * - Make it prominent and use actionable messaging to guide users.
 *
 * **Don’t:**
 * - Don’t use for low-priority or informational messages.
 * - Don’t dilute impact by using multiple danger callouts in the same view.
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
