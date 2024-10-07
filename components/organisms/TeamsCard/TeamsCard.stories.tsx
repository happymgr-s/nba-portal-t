import type { Meta, StoryObj } from '@storybook/react';
import TeamsCard from './TeamsCard';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const meta = {
  title: 'Organisms/TeamsCard',
  component: TeamsCard,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    href: '/',
    team: teamsMockData[0],
  },
} satisfies Meta<typeof TeamsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
