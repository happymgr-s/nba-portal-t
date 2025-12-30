import type { Meta, StoryObj } from '@storybook/react';
import ScoreText from './ScoreText';

const meta = {
  title: 'Atoms/ScoreText',
  component: ScoreText,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: '103',
  },
} satisfies Meta<typeof ScoreText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
