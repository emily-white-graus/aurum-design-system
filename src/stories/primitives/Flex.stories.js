import { Flex } from './Flex';
import { Box } from './Box';
import React from 'react';

export default {
  title: 'Primitives/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Row = () =>
  React.createElement(
    Flex,
    {
      direction: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gapX: 2,
      gapY: 2,
    },
    React.createElement(Box, null),
    React.createElement(Box, null),
    React.createElement(Box, null)
  );

export const Column = () =>
  React.createElement(
    Flex,
    {
      direction: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gapX: 2,
      gapY: 2,
    },
    React.createElement(Box, null),
    React.createElement(Box, null),
    React.createElement(Box, null)
  );
