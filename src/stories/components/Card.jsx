import React from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import "./Card.css";

/**
 * **Do:**
 *
 * - Use for displaying read-only information (e.g., status summaries, content previews, contextual blocks).
 * - Choose the appropriate size based on content density:
 *   - **Small** — short snippets or metadata
 *   - **Medium** — default use, 2–3 lines of copy
 *   - **Large** — extended descriptions or formatted blocks
 * - Include a clear heading to establish card hierarchy.
 * - Maintain padding and spacing internally for clarity and visual comfort.
 * - Use elevation or border to visually separate the card from the background.
 *
 * **Don’t:**
 *
 * - Don’t add buttons, links, or inputs in info-only cards — use actionable cards for those.
 * - Don’t overload cards with long paragraphs — keep copy concise.
 * - Don’t use inconsistent spacing between card sizes.
 * - Don’t change card size responsively without clear rules.
 */

export const Card = ({ variant = "medium", children, className = "" }) => {
  return (
    <Box className={`card card-${variant} ${className}`}>
      <Stack gap="2">{children}</Stack>
    </Box>
  );
};
