import React from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Header } from "../POCcomponents/Header";
import { HeroSection } from "../POCcomponents/HeroSection";
import { Text } from "../primitives/Text";
import { Search } from "../POCcomponents/Search";
import { Choice } from "../POCcomponents/Choice";
import { CardStack } from "../POCcomponents/CardStack";
import "./CareerPage.css";

export const CareerPage = () => {
  return (
    <Box className="career-page">
      <Stack direction="column" className="career-wrapper">
        <Header />
        <HeroSection />

        <Box className="career-content">
          <Box className="career-section">

            <Stack direction="column" alignItems="center" gap="12" className="career-search">
              <Text as="h2" className="career-heading">Open Positions</Text>
              <Search />
              <Choice />
              <CardStack />
            </Stack>

          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
