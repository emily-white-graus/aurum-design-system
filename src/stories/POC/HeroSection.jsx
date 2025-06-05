import React from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { Button } from "../components/Button";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <Box className="hero">
      <Stack direction='column' gap="12">
        <Text as="spam" className="hero-heading">
          Help us build a better bank for everyone
        </Text>
        <Stack direction='column' gap="8">
            <Text as="p" className="hero-paragraph">
            We encourage an open, collaborative, inclusive working environment. We contribute to open source software, and we continually engage with our wonderful community.
            </Text>

            <Text as="p" className="hero-paragraph">
            We’re looking for curious, creative people who care about making money work for everyone. Sound like you?
            </Text>
        </Stack>
        <Button size='large' className="hero-button">See Open Roles</Button>
      </Stack>
    </Box>
  );
};
