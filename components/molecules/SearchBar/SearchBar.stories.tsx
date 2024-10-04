import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";

const meta = {
  title: "Molecules/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};