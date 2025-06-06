import React from "react";
import "./Alert.css";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { X, Info, CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";

/**
 * **Do:**
 * 
 * - Use alerts to show status updates, system warnings, errors, or success confirmations.
 * - Use the appropriate semantic variant:
 *  - Default — general info
 *  - Warning — caution or required attention
 *  - Success — positive confirmation
 *  - Error — critical or blocking issue
 * - Include an icon to visually reinforce the message type.
 * - Use a close button (×) to allow dismissing non-blocking messages.
 * - Include a link or button only when users are expected to take further action (e.g., "Learn More").
 *
 * **Don’t:**
 *
 * - Don’t use alerts for permanent content — alerts are temporary and contextual.
 * - Don’t stack too many alerts on a single screen.
 * - Don’t use alerts for form field validation — use inline error messaging instead.
 * - Don’t include more than one action per alert.
 */


export const Alert = ({
  variant = "default",
  message,
  linkText,
  linkHref,
  onClose,
}) => {
  const iconMap = {
    default: <Info size={18} />,
    warning: <AlertCircle size={18} />,
    success: <CheckCircle size={18} />,
    error: <AlertTriangle size={18} />,
  };

  return (
    <Box className={`alert alert-${variant}`}>
      <Stack direction="row" alignItems="center" gap="4">
        <Box className="alert-icon">{iconMap[variant]}</Box>
        <Text as="span" className="alert-message">
          {message}
          {linkText && linkHref && (
            <>
              {" "}
              <a href={linkHref} className="alert-link">
                {linkText}
              </a>
            </>
          )}
        </Text>
      </Stack>
        <button className="alert-close" onClick={onClose}>
          <X size={20} />
        </button>
    </Box>
  );
};