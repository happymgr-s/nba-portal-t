import type { Meta, StoryObj } from "@storybook/react";
import PlayersSearchBar from "./PlayersSearchBar";

const meta = {
  title: "Organisms/PlayersSearchBar",
  component: PlayersSearchBar,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PlayersSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};