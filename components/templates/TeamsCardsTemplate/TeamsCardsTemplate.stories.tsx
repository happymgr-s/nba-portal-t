import type { Meta, StoryObj } from '@storybook/react';
import TeamsCardsTemplate from './TeamsCardsTemplate';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const atlanticTeams = teamsMockData.filter((team) => team.Division === 'Atlantic');

const meta = {
  title: 'Templates/TeamsCardsTemplate',
  component: TeamsCardsTemplate,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    division: 'ATLANTIC',
    teams: atlanticTeams,
  },
} satisfies Meta<typeof TeamsCardsTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
