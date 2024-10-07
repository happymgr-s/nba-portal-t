import type { Meta, StoryObj } from '@storybook/react';
import PlayersCard from './PlayersCard';
import { activePlayersMockData } from '@/lib/mockData/playersMockData';

const meta = {
  title: 'Organisms/PlayersCard',
  component: PlayersCard,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    href: '',
    playerData: activePlayersMockData[0],
  },
} satisfies Meta<typeof PlayersCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
