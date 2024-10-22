import type { Meta, StoryObj } from "@storybook/react";
import StatsTemplate from "./StatsTemplate";

const meta = {
  title: "Templates/StatsTemplate",
  component: StatsTemplate,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof StatsTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};