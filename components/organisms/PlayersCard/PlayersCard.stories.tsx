import type { Meta, StoryObj } from '@storybook/react';
import PlayersCard from './PlayersCard';

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
    playerImageSrc: '/猫.png',
    playerImageAlt: 'player_image',
    playerName: 'neko tyan',
    teamName: '猫猫バスターズ',
    position: 'PG',
  },
} satisfies Meta<typeof PlayersCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
