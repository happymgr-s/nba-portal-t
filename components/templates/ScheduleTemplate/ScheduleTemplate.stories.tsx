import type { Meta, StoryObj } from "@storybook/react";
import ScheduleTemplate from "./ScheduleTemplate";

const meta = {
  title: "Templates/ScheduleTemplate",
  component: ScheduleTemplate,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ScheduleTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};