import type { Meta, StoryObj } from '@storybook/react';
import TeamsCard from './TeamsCard';

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
    logoUrl: '/猫.png',
    logoAlt: 'logo',
    teamName: '猫猫バスターズ',
  },
} satisfies Meta<typeof TeamsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
