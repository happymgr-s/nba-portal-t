import type { Meta, StoryObj } from '@storybook/react';
import TeamsTemplate from './TeamsTemplate';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const meta = {
  title: 'Templates/TeamsTemplate',
  component: TeamsTemplate,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    teams: teamsMockData,
  },
} satisfies Meta<typeof TeamsTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
