import type { Meta, StoryObj } from "@storybook/react";
import ScheduleTeamCard from "./ScheduleTeamCard";

const meta = {
  title: "Molecules/ScheduleTeamCard",
  component: ScheduleTeamCard,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ScheduleTeamCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};