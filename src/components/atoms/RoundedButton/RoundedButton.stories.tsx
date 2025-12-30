import type { Meta, StoryObj } from '@storybook/react';
import RoundedButton from './RoundedButton';

const meta = {
  title: 'Atoms/RoundedButton',
  component: RoundedButton,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof RoundedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
