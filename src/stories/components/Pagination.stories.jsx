import React, { useState } from "react";
import { Pagination } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

const Template = (args) => {
  const [page, setPage] = useState(1);
  return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
};

export const Enabled = Template.bind({});
Enabled.args = {
  totalPages: 5,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  totalPages: 5,
  currentPage: 1,
  disabled: true,
};

export const Focused = Template.bind({});
Focused.args = {
  totalPages: 5,
  currentPage: 3,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  totalPages: 5,
  currentPage: 1,
  disabled: false,
};
