import type { Meta, StoryObj } from '@storybook/react';
import NewsesCard from './NewsesCard';
import { newsMockData } from '@/lib/mockData/newsMockData';

const meta = {
  title: 'Organisms/NewsesCard',
  component: NewsesCard,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    news: newsMockData[0],
  },
} satisfies Meta<typeof NewsesCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
