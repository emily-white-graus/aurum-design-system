import React from "react";
import { Card } from "../components/Card";
import { CardHeading } from "../components/CardHeading";
import { CardContent } from "../components/CardContent";
import { Stack } from "../primitives/Stack";
import { Anchor } from "../components/Anchor";
import "./CardStack.css";

const cardData = [
  {
    heading: "Borrowing Ops",
    content: "Remote",
    link: "#1",
  },
  {
    heading: "Complaints Advisor",
    content: "On-site",
    link: "#2",
  },
  {
    heading: "Complaints Team Advisor",
    content: "Remote",
    link: "#3",
  },
  {
    heading: "Front-End Engineer",
    content: "On-site",
    link: "#4",
  },
  {
    heading: "Senior Product Designer",
    content: "On-site",
    link: "#5",
  },
  {
    heading: "Technical Product Manager",
    content: "On-site",
    link: "#6",
  },
];

export const CardStack = () => {
  return (
    <Stack direction="column" gap="4">
      {[0, 1].map((rowIndex) => (
        <Stack key={rowIndex} direction="row" gap="4">
          {cardData.slice(rowIndex * 3, rowIndex * 3 + 3).map((card, index) => (
            <Card key={index} variant="medium" className='card-stack' >
              <Stack gap="2">
                <CardHeading variant="medium">{card.heading}</CardHeading>
                <CardContent variant="medium">{card.content}</CardContent>
                <Anchor href={card.link}>More About This Role</Anchor>
              </Stack>
            </Card>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};
