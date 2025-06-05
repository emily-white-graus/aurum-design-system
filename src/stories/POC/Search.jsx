import React from "react";
import { Box } from "../primitives/Box";
import { Flex } from "../primitives/Flex";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import "./Search.css";

export const Search = () => {
  return (
    <Box>
      <Flex direction="horizontal" alignItems='center' className="search-wrapper">
        <TextInput
          className="search-input"
          placeholder="Search Jobs..."
          type="text"
        />
        <Button className="search-button">Search</Button>
      </Flex>
    </Box>
  );
};
