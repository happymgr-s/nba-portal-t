import type { Meta, StoryObj } from '@storybook/react';
import StatsGridTemplate from './StatsGridTemplate';
import { playerSeasonStatsMockData } from '@/lib/mockData/statsMockData';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const pointsLeaders = playerSeasonStatsMockData
  .filter((stat) => stat.Points !== null)
  .sort((a, b) => b.Points - a.Points)
  .slice(0, 5);

const meta = {
  title: 'Templates/StatsGridTemplate',
  component: StatsGridTemplate,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: '総得点',
    leaderKey: 'Points',
    leaders: pointsLeaders,
    leaderLabel: 'pts',
    teams: teamsMockData,
  },
} satisfies Meta<typeof StatsGridTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
