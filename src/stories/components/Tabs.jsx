import React from "react";
import "./Tabs.css";
import { Box } from "../primitives/Box";
import { Text } from "../primitives/Text";
import { Stack } from "../primitives/Stack";

/**
 * **Do:**
 * 
 * - Use tabs when multiple views share a common context (e.g., dashboard sections, profile settings).
 * - Display active tabs with a bold label and an underline indicator.
 * - Include hover and focus states for clear interactivity.
 * - Use disabled tabs to indicate unavailable views.
 * - Keep tab labels short and meaningful (1–2 words).
 * 
 * **Don’t:**
 * 
 * - Don’t use tabs for unrelated content blocks.
 * - Don’t overload a tab set — limit to ~5 tabs; otherwise, consider a dropdown or overflow menu.
 * - Don’t use icons or complex UI inside tab labels unless absolutely needed.
 */

export const Tabs = ({ tabs, activeIndex, onTabClick }) => {
  return (
    <Box className="tabs-container">
      <Stack direction="row">
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;
          const isDisabled = tab.disabled;

          return (
            <button
              key={index}
              className={`tab-button ${
                isActive ? "active" : ""
              } ${isDisabled ? "disabled" : ""}`}
              onClick={() => !isDisabled && onTabClick(index)}
              disabled={isDisabled}
            >
              <Text as='spam'> {tab.label}</Text>
              {isActive && <Box className="tab-underline" />}
            </button>
          );
        })}
      </Stack>
    </Box>
  );
};
