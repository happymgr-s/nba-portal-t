import type { Meta, StoryObj } from '@storybook/react';
import HomeTemplate from './HomeTemplate';
import { scheduleBasicMockData } from '@/lib/mockData/scheduleMockData';
import { closedSeasonStandingsMockData } from '@/lib/mockData/standingsMockData';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const meta = {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    schedules: [],
    standings: closedSeasonStandingsMockData,
    teams: teamsMockData,
  },
} satisfies Meta<typeof HomeTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
