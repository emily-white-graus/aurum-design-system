import React from "react";
import { Box } from "../primitives/Box";
import { Flex } from "../primitives/Flex";
import { Stack } from "../primitives/Stack";
import { Button } from "../components/Button";
import "./Header.css";

export const Header = () => {
  return (
    <Box className="header">
      <Flex direction='row' justifyContent="space-between" alignItems="center" className="header-inner">
        <Box className="header-logo">monzo</Box>
        <Stack direction='row' gap='4'>
          <Button variant='primary' size='large' >Login</Button>
          <Button variant='secondary' size='large' >Signup</Button>
        </Stack>
      </Flex>
    </Box>
  );
};
