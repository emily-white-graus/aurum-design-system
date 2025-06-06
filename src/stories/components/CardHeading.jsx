import React from "react";
import { Text } from "../primitives/Text";
import "./Card.css";

export const CardHeading = ({ variant = "medium", children }) => (
  <Text as="span" className={`card-heading card-heading-${variant}`}>
    {children}
  </Text>
);
