import React from "react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

const Template = (args) => <Card {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  title: "Heading",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  title: "Heading",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  title: "Heading",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
};
