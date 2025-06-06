import React, { useState } from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { RadioButton } from "../components/RadioButton";

export const Choice = () => {
  const [selected, setSelected] = useState("remote");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <Box>
      <Stack direction="horizontal" gap="4">
        <RadioButton
          name="work-location"
          value="remote"
          label="Remote"
          checked={selected === "remote"}
          onChange={handleChange}
        />
        <RadioButton
          name="work-location"
          value="on-site"
          label="On-site"
          checked={selected === "on-site"}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};
