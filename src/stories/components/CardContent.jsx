import React from "react";
import { Text } from "../primitives/Text";
import "./Card.css";

export const CardContent = ({ variant = "medium", children }) => (
  <Text as="span" className={`card-content card-text-${variant}`}>
    {children}
  </Text>
);
