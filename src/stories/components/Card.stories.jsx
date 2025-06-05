import React from "react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

const Template = (args) => <Card {...args} />;

export const Large = Template.bind({});
Large.args = {
  variant: "large",
  heading: "Heading",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "medium",
  heading: "Heading",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  heading: "Heading",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
};
