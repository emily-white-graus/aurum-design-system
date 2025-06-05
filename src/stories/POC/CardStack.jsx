import React from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Card } from "../components/Card";
import { Text } from "../primitives/Text";
import { Anchor } from "../components/Anchor";
import './CardStack.css';

const roles = [
  { title: "Borrowing Ops", type: "Remote" },
  { title: "Complaints Advisor", type: "On-site" },
  { title: "Complaints Team Manager", type: "Remote" },
  { title: "Front-End Engineer", type: "On-site" },
  { title: "Senior Product Designer", type: "On-site" },
  { title: "Technical Product Manager", type: "On-site" },
];

export const CardStack = () => {
  return (
    <Box className="card-stack">
      <Stack direction="horizontal" wrap gap="4">
        {roles.map((role, index) => (
          <Card key={index} className="card-item">
            <Stack gap="2">
              <Text as="span" className="card-title">
                {role.title}
              </Text>
              <Text as="span" className="card-location">
                {role.type}
              </Text>
              <Anchor href="#" className="card-link">
                More About This Role
              </Anchor>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
