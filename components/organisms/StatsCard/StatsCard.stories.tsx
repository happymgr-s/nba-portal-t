import type { Meta, StoryObj } from '@storybook/react';
import StatsCard from './StatsCard';
import { playerSeasonStatsMockData } from '@/lib/mockData/statsMockData';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const meta = {
  title: 'Organisms/StatsCard',
  component: StatsCard,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    stat: playerSeasonStatsMockData[0],
    team: teamsMockData[0],
    rank: 0,
    leaderLabel: 'pts',
  },
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
