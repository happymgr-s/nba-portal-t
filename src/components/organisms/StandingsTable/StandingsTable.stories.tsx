import type { Meta, StoryObj } from '@storybook/react';
import StandingsTable from './StandingsTable';
import { closedSeasonStandingsMockData } from '@/lib/mockData/standingsMockData';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const meta = {
  title: 'Organisms/StandingsTable',
  component: StandingsTable,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    standings: closedSeasonStandingsMockData,
    teams: teamsMockData,
  },
} satisfies Meta<typeof StandingsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
