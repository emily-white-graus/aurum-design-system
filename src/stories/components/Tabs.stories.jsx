import React, { useState } from "react";
import { Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

const Template = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return <Tabs {...args} activeIndex={activeIndex} onTabClick={setActiveIndex} />;
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: "Option 1" },
    { label: "Option 2" },
    { label: "Option 3" },
    { label: "Option 4" },
  ],
};

export const WithHover = Template.bind({});
WithHover.args = Default.args;

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  tabs: [
    { label: "Option 1" },
    { label: "Option 2", disabled: true },
    { label: "Option 3" },
    { label: "Option 4" },
  ],
};
