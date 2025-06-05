import React from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import "./Card.css";

/**
 * Card component with size variants: large, medium, small.
 * @param {string} variant - Card size variant
 * @param {string} heading - Card heading
 * @param {string} content - Card body text
 */

export const Card = ({ variant = "medium", heading, content }) => {
  return (
    <Box className={`card card-${variant}`}>
      <Stack gap="2">
        <Text as="span" className={`card-heading card-heading-${variant}`}>
          {heading}
        </Text>
        <Text as="span" className={`card-content card-text-${variant}`}>
          {content}
        </Text>
      </Stack>
    </Box>
  );
};
