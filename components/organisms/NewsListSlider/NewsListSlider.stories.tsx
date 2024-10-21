import type { Meta, StoryObj } from "@storybook/react";
import NewsListSlider from "./NewsListSlider";

const meta = {
  title: "Organisms/NewsListSlider",
  component: NewsListSlider,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NewsListSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};