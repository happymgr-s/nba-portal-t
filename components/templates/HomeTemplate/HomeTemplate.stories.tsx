import type { Meta, StoryObj } from "@storybook/react";
import HomeTemplate from "./HomeTemplate";

const meta = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HomeTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};