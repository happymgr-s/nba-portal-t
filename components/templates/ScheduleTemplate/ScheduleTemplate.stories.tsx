import type { Meta, StoryObj } from '@storybook/react';
import ScheduleTemplate from './ScheduleTemplate';
import { scheduleBasicMockData } from '@/lib/mockData/scheduleMockData';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const meta = {
  title: 'Templates/ScheduleTemplate',
  component: ScheduleTemplate,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    schedules: scheduleBasicMockData,
    teams: teamsMockData,
  },
} satisfies Meta<typeof ScheduleTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
