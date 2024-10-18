import type { Meta, StoryObj } from '@storybook/react';
import RankingTemplate from './RankingTemplate';
import { closedSeasonStandingsMockData } from '@/lib/mockData/standingsMockData';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const meta = {
  title: 'Templates/RankingTemplate',
  component: RankingTemplate,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    standings: closedSeasonStandingsMockData,
    teams: teamsMockData,
  },
} satisfies Meta<typeof RankingTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
