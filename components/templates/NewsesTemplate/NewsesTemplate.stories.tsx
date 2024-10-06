import type { Meta, StoryObj } from "@storybook/react";
import NewsesTemplate from "./NewsesTemplate";
import { newsMockData } from "@/app/api/nba/news/route";

const meta = {
  title: "Templates/NewsesTemplate",
  component: NewsesTemplate,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    newses: newsMockData,
  },
} satisfies Meta<typeof NewsesTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
