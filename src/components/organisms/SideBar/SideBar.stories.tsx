import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';
import { seasonMockData } from '@/lib/mockData/seaseonMockData';

const meta = {
  title: 'Organisms/SideBar',
  component: SideBar,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    currentSeason: seasonMockData,
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
