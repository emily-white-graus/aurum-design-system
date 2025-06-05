import React from "react";
import "./Tabs.css";
import { Box } from "../primitives/Box";
import { Text } from "../primitives/Text";
import { Stack } from "../primitives/Stack";

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
