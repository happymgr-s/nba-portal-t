import type { Meta, StoryObj } from '@storybook/react';
import ScheduleCard from './ScheduleCard';
import { scheduleBasicMockData } from '@/lib/mockData/scheduleMockData';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const meta = {
  title: 'Organisms/ScheduleCard',
  component: ScheduleCard,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    schedule: scheduleBasicMockData[0],
    homeTeam: teamsMockData[0],
    awayTeam: teamsMockData[7],
  },
} satisfies Meta<typeof ScheduleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Upcoming: Story = {
  args: {},
};

export const Live: Story = {
  args: {
    schedule: { ...scheduleBasicMockData[0], Status: 'InProgress' },
  },
};

export const Closed: Story = {
  args: {
    schedule: { ...scheduleBasicMockData[0], Status: 'Final' },
  },
};
