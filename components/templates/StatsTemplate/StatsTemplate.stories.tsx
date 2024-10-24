import type { Meta, StoryObj } from '@storybook/react';
import StatsTemplate from './StatsTemplate';
import { teamsMockData } from '@/lib/mockData/teamsMockData';
import { playerSeasonStatsMockData } from '@/lib/mockData/statsMockData';

const meta = {
  title: 'Templates/StatsTemplate',
  component: StatsTemplate,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    playerStats: playerSeasonStatsMockData,
    teams: teamsMockData,
  },
} satisfies Meta<typeof StatsTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
