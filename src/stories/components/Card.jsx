import React from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import "./Card.css";

/**
 * Reusable Card component with size variants and slot-based children.
 *
 * @param {string} variant - Card size variant: 'small' | 'medium' | 'large'
 * @param {React.ReactNode} children - Custom content inside the card
 * @param {string} className - Optional additional class names
 * @returns JSX.Element
 */
export const Card = ({ variant = "medium", children, className = "" }) => {
  return (
    <Box className={`card card-${variant} ${className}`}>
      <Stack gap="2">{children}</Stack>
    </Box>
  );
};
