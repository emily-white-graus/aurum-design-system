import React from "react";
import "./Alert.css";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { X, Info, CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";

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
      <Stack direction="row" align="center" gap="4">
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
