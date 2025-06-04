import React from "react";
import "./Card.css";
import { Box } from "../primitives/Box";
import { Text } from "../primitives/Text";

export const Card = ({ size = "medium", title, children }) => {
  return (
    <Box className={`card card-${size}`}>
      <Text as="h3" className="card-title">
        {title}
      </Text>
      <Text className="card-body">{children}</Text>
    </Box>
  );
};
