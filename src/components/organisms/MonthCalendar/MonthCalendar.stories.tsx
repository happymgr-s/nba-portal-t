import type { Meta, StoryObj } from "@storybook/react";
import MonthCalendar from "./MonthCalendar";

const meta = {
  title: "Organisms/MonthCalendar",
  component: MonthCalendar,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MonthCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};