import type { Meta, StoryObj } from '@storybook/react';
import CenterLogo from './CenterLogo';

const meta = {
  title: 'Atoms/CenterLogo',
  component: CenterLogo,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    src: '/猫.png',
  },
} satisfies Meta<typeof CenterLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
