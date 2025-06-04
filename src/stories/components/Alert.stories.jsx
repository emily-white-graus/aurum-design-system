import React from "react";
import { Alert } from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  message: "This is an alert message.",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  message: "This is an alert message.",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  message: "This is an alert message.",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  message: "This is an alert message.",
};

export const WithLink = Template.bind({});
WithLink.args = {
  variant: "default",
  message: "This is an alert message.",
  linkText: "Learn More.",
  linkHref: "#",
};

export const WithClose = Template.bind({});
WithClose.args = {
  variant: "success",
  message: "This is an alert message.",
  onClose: () => alert("Closed"),
};

export const WithLinkAndClose = Template.bind({});
WithLinkAndClose.args = {
  variant: "error",
  message: "This is an alert message.",
  linkText: "Learn More.",
  linkHref: "#",
  onClose: () => alert("Closed"),
};
