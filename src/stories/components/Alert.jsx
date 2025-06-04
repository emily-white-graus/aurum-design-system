import React from "react";
import "./Alert.css";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { X, Info, CheckCircle, AlertCircle } from "lucide-react";

export const Alert = ({
  variant = "default",
  message,
  linkText,
  linkHref,
  onClose,
}) => {
  const iconMap = {
    default: <Info size={16} />,
    warning: <AlertCircle size={16} />,
    success: <CheckCircle size={16} />,
    error: <AlertCircle size={16} />,
  };

  return (
    <Box className={`alert alert-${variant}`}>
      <Stack direction="row" align="center" gap="8px">
        <Box className="alert-icon">{iconMap[variant]}</Box>
        <Text className="alert-message">
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
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          <X size={16} />
        </button>
      )}
    </Box>
  );
};
