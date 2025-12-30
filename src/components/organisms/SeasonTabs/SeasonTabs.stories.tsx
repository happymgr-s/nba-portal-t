import type { Meta, StoryObj } from "@storybook/react";
import SeasonTabs from "./SeasonTabs";

const meta = {
  title: "Organisms/SeasonTabs",
  component: SeasonTabs,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SeasonTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};