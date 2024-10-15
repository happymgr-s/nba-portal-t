import type { Meta, StoryObj } from '@storybook/react';
import ScheduleTeamCard from './ScheduleTeamCard';
import { scheduleBasicMockData } from '@/lib/mockData/scheduleMockData';

const meta = {
  title: 'Molecules/ScheduleTeamCard',
  component: ScheduleTeamCard,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    schedule: scheduleBasicMockData[0],
    logoSrc: '/猫.png',
    side: 'HOME',
  },
} satisfies Meta<typeof ScheduleTeamCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
