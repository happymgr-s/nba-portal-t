import type { Meta, StoryObj } from "@storybook/react";
import DisplayTypeSwitch from "./DisplayTypeSwitch";

const meta = {
  title: "Organisms/DisplayTypeSwitch",
  component: DisplayTypeSwitch,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DisplayTypeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};