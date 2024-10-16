import type { Meta, StoryObj } from "@storybook/react";
import ScheduleDatePicker from "./ScheduleDatePicker";

const meta = {
  title: "Organisms/ScheduleDatePicker",
  component: ScheduleDatePicker,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ScheduleDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};