import type { Meta, StoryObj } from "@storybook/react";
import ScheduleCard from "./ScheduleCard";

const meta = {
  title: "Organisms/ScheduleCard",
  component: ScheduleCard,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ScheduleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};