import type { Meta, StoryObj } from "@storybook/react";
import PlayersTemplate from "./PlayersTemplate";
import { activePlayersMockData } from "@/app/api/nba/players/active/route";

const meta = {
  title: "Templates/PlayersTemplate",
  component: PlayersTemplate,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    players: activePlayersMockData,
  },
} satisfies Meta<typeof PlayersTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
