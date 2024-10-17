import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';

const meta = {
  title: 'Organisms/SideBar',
  component: SideBar,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    currentSeason: '2025',
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
