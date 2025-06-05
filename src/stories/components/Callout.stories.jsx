import React from "react";
import { Callout } from "./Callout";

export default {
  title: "Components/Callout",
  component: Callout,
  tags: ["autodocs"],
};

const Template = (args) => <Callout {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  message: "This is an callout message.",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  message: "This is an callout message.",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  message: "This is an callout message.",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  message: "This is an callout message.",
};

