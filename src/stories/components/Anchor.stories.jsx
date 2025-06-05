import React from 'react';
import { Anchor } from './Anchor';

export default {
  title: 'Components/Anchor',
  component: Anchor,
  tags: ['autodocs'],
};

const Template = (args) => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  children: 'Anchor',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  href: '#',
  children: 'Anchor',
  withIcon: true,
};

export const Visited = Template.bind({});
Visited.args = {
  href: 'https://example.com',
  children: 'Anchor',
  className: 'visited',
};

export const Disabled = Template.bind({});
Disabled.args = {
  href: '#',
  children: 'Anchor',
  disabled: true,
};

export const WithIconDisabled = Template.bind({});
WithIconDisabled.args = {
  href: '#',
  children: 'Anchor',
  disabled: true,
  withIcon: true,
};
