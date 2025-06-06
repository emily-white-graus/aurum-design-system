import React from "react";
import { Card } from "./Card";
import { CardHeading } from "./CardHeading";
import { CardContent } from "./CardContent";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

const Template = ({ variant, heading, content }) => (
  <Card variant={variant}>
    <CardHeading variant={variant}>{heading}</CardHeading>
    <CardContent variant={variant}>{content}</CardContent>
  </Card>
);

export const Large = Template.bind({});
Large.args = {
  variant: "large",
  heading: "Large Heading",
  content: "This is large card content.",
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "medium",
  heading: "Medium Heading",
  content: "This is medium card content.",
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  heading: "Small Heading",
  content: "This is small card content.",
};
